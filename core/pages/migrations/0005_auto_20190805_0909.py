# Generated by Django 2.2.3 on 2019-08-05 09:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0004_auto_20190717_0912'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='like_cnt',
        ),
        migrations.RemoveField(
            model_name='question',
            name='comment_cnt',
        ),
        migrations.RemoveField(
            model_name='question',
            name='like_cnt',
        ),
    ]
