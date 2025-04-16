# Generated by Django 5.2 on 2025-04-13 13:05

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_employementdetails_employe_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employementdetails',
            name='employe_id',
            field=models.CharField(default=api.models.unique_id, max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='employementdetails',
            name='employement_type',
            field=models.CharField(blank='select_EMP_type', choices=[('FT', 'Full-Time'), ('PT', 'Part-Time'), ('CT', 'contract'), ('Fx', 'Filexble')], max_length=23),
        ),
        migrations.AlterField(
            model_name='employementdetails',
            name='gender',
            field=models.CharField(blank='select_Gender', choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Others')], max_length=10),
        ),
    ]
