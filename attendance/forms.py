from django import forms
from attendance.models import Grade


class GradeForm(forms.ModelForm):
    model = Grade
    fields = "__all__"

    def clean(self):
        grade = self.cleaned_data["grade"]
        if Grade.objects.filter(grade=grade):
            raise forms.ValidationError(f"Grade {grade} already exists")
