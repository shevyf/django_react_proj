# Generated by Django 4.1.2 on 2022-10-25 21:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('programme', '0007_attendee_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='items', to='programme.location'),
        ),
        migrations.AlterField(
            model_name='item',
            name='moderator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='items', to='programme.attendee'),
        ),
    ]
