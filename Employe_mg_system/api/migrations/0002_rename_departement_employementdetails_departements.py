# Generated by Django 5.2 on 2025-04-12 22:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employementdetails',
            old_name='departement',
            new_name='departements',
        ),
    ]
