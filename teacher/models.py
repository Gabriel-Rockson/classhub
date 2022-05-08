from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid


class Teacher(models.Model):
    """Model to represent individual teacher"""

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
    first_name = models.CharField(
        verbose_name=_("First Name"),
        null=False,
        blank=False,
        max_length=50,
        help_text="Enter the first name of the teacher.",
    )
    last_name = models.CharField(
        verbose_name=_("Last Name"),
        null=False,
        blank=False,
        max_length=50,
        help_text="Enter the last name of the teacher.",
    )
    middle_name = models.CharField(
        verbose_name=_("Middle Name"),
        null=True,
        blank=True,
        max_length=50,
        help_text="Enter middle name of teacher if applies.",
    )
    email = models.EmailField(
        verbose_name=_("Email Address"),
        null=False,
        blank=False,
        help_text="Email address of the teacher.",
        max_length=255,
    )
    address = models.CharField(
        verbose_name=_("Address of Teacher"), null=True, blank=True, max_length=100
    )
    cell_number = models.CharField(
        verbose_name=_("Cell Number"),
        null=False,
        blank=False,
        max_length=20,
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Teacher"
        verbose_name_plural = "Teachers"
        ordering = ("first_name",)
