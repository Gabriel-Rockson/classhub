from django.db import models
from django.utils.translation import gettext_lazy as _


class Student(models.Model):
    """Model to represent individual student"""
    
    class Gender(models.TextChoices):
        """Text choices for the gender"""
        MALE = "M", _("Male")
        FEMALE = "F", _("Female")
        OTHER = "O", _("Other")

    class Race(models.TextChoices):
        """Text choices for the race"""
        WHITE = "W", _("White")
        BLACK = "B", _("Black / African American")
        AMERICAN_INDIAN = "AIN", _("American Indian / Alaska Native")
        ASIAN = "A", _("Asian")
        HAWAIIAN = "H", "Native Hawaiian / Other Pacific Islander"
        OTHER = "O", "Some Other Race"

    first_name = models.CharField(
        verbose_name=_("First Name"),
        help_text="Enter student's first name",
        max_length=50,
        null=False,
        blank=False,
    )
    middle_name = models.CharField(
        verbose_name=_("Last Name"),
        help_text="Enter student's last name",
        max_length=50,
        null=False,
        blank=False,
    )
    last_name = models.CharField(
        verbose_name=_("Middle Name"),
        help_text="Enter student's middle name",
        max_length=50,
        null=True,
        blank=True,
    )
    date_of_birth = models.DateField(
        verbose_name=_("Date of Birth"), help_text="Pick the student's date of birth"
    )
    gender = models.CharField(
        verbose_name=_("Gender"),
        max_length=1,
        choices=Gender.choices,
        default=Gender.MALE,
    )
    race = models.CharField(
        verbose_name=_("Race"), max_length=3, choices=Race.choices, default=Race.WHITE
    )
    student_id = models.CharField(
        verbose_name=_("Student's ID"), max_length=20, null=True, blank=True
    )
    address = models.CharField(
        verbose_name="Student's Address", max_length=50, null=True, blank=True
    )
    father_name = models.CharField(
        verbose_name=_("Father's Name"),
        max_length=100,
        null=True,
        blank=True,
        help_text="Enter the name of the student's father.",
    )
    father_contact = models.CharField(
        verbose_name=_("Father's Contact"),
        max_length=20,
        null=True,
        blank=True,
        help_text="Enter the contact of the father ( phone )",
    )
    mother_name = models.CharField(
        verbose_name=_("Mother's Name"),
        max_length=100,
        null=True,
        blank=True,
        help_text="Enter the name of the student's mother.",
    )
    mother_contact = models.CharField(
        verbose_name=_("Mother's Contact"),
        max_length=20,
        null=True,
        blank=True,
        help_text="Enter the contact of the mother ( phone )",
    )
    guardian_name = models.CharField(
        verbose_name=_("Name of Guardian"),
        max_length=100,
        help_text="In the absence of either parents, fill in the name of the current guardian of student.",
        null=True,
        blank=True,
    )
    guardian_email = models.EmailField(
        verbose_name=_("Guardian's Email"),
        max_length=255,
        help_text="Enter the email address of any of the guardians of the student.",
        null=True,
        blank=True,
    )
    home_phone = models.CharField(
        verbose_name=_("Home Phone"), max_length=50, null=False, blank=False
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

    class Meta:
        ordering = ("first_name",)
        verbose_name = "Student"
        verbose_name_plural = "Students"