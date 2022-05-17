from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from teacher.models import Teacher

User = get_user_model()


@receiver(post_save, sender=User)
def create_teacher_profile(sender, **kwargs):
    instance = kwargs.get("instance")
    created = kwargs.get("created")
    if created:
        teacher_profile = Teacher.objects.create(user=instance, email=instance.email)
        teacher_profile.save()
