from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _
import uuid
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, username=None, email=None, password=None, **kwargs):
        if username is None:
            raise ValueError("Username is required")
        if password is None:
            raise ValueError("Password is required")

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_teacher_user(self, username=None, email=None, password=None, **kwargs):
        user = self.create_user(
            username=username, email=email, password=password, **kwargs
        )
        user.is_staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, username=None, email=None, password=None, **kwargs):

        user = self.create_user(
            username=username, email=email, password=password, **kwargs
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(
        verbose_name=_("ID"),
        primary_key=True,
        null=False,
        blank=False,
        db_index=True,
        unique=True,
        editable=False,
        default=uuid.uuid4,
    )
    username = models.CharField(
        verbose_name=_("Username"), null=False, blank=False, max_length=50, unique=True
    )
    email = models.EmailField(
        verbose_name=_("Email"), null=True, blank=True, max_length=255
    )
    is_staff = models.BooleanField(
        verbose_name=_("Staff Status"),
        default=False,
    )
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "username"

    objects = UserManager()

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
