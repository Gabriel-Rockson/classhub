from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid
from django.db.models.functions import TruncDate
from itertools import groupby
from operator import attrgetter


class Grade(models.Model):
    """Model to represent individual classes"""

    class Grades(models.TextChoices):
        THREE_K = "3K", _("3K")
        FOUR_K = "4K", _("4K")
        ONE = 1, _("1")
        TWO = 2, _("2")
        THREE = 3, _("3")
        FOUR = 4, _("4")
        FIVE = 5, _("5")
        SIX = 6, _("6")
        SEVEN = 7, _("7")
        EIGHT = 8, _("8")
        NINE = 9, _("9")
        TEN = 10, _("10")
        ELEVEN = 11, _("11")
        TWELVE = 12, _("12")

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
    grade = models.CharField(
        verbose_name=_("Grade"),
        max_length=2,
        help_text="Select grade of class.",
        null=False,
        blank=False,
        choices=Grades.choices,
        default=Grades.ONE,
    )

    def __str__(self):
        return f"Grade {self.grade}"

    def number_of_students(self):
        return self.students.count()

    class Meta:
        verbose_name = "Grade"
        verbose_name_plural = "Grades"
        ordering = ("grade",)


class StudentAttendanceManager(models.Manager):
    def grade_attendances(self, grade_id):
        return self.filter(student__grade=grade_id)


class StudentAttendance(models.Model):
    """Model to represent individual attendance record of a student"""

    class AttendanceOptions(models.TextChoices):
        PRESENT = "P", _("Present")
        UNEX = "UNEX", _("SC-UNEX ( Unexcused / Unverified")
        ETRD = "ETRD", _("SC-ETRD ( Excused Tardy )")
        UTRD = "UTRD", _("SC-UTRD ( Unexcused Tardy )")
        VTP = "VTP", _("SC-VTP ( Virtual Present Code )")

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
    student = models.ForeignKey(
        "student.Student",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="attendances",
    )
    created = models.DateField(
        _("Attendance Creation Date"), blank=False, null=False, auto_now_add=True
    )
    updated = models.DateField(_("Last Modified"), null=True, blank=True, auto_now=True)
    attendance = models.CharField(
        verbose_name=_("Attendance"),
        max_length=4,
        null=False,
        blank=False,
        default=AttendanceOptions.PRESENT,
        choices=AttendanceOptions.choices,
    )

    objects = StudentAttendanceManager()

    def __str__(self):
        return f"StudentAttendance(student={self.student}, attendance={self.get_attendance_display()})"
