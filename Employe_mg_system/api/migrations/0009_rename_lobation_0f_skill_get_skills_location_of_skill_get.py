# Generated by Django 5.2 on 2025-04-15 18:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_register_login'),
    ]

    operations = [
        migrations.RenameField(
            model_name='skills',
            old_name='lobation_0f_skill_get',
            new_name='location_of_skill_get',
        ),
    ]
