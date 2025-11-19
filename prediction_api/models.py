from django.db import models

class DslD95(models.Model):

    date = models.DateTimeField(db_column='DATE') 
    target = models.FloatField() 
    predict = models.FloatField()

    class Meta:

        db_table = 'result_DslD95' 

class DslFlashPt(models.Model):   
    date = models.DateTimeField(db_column='DATE') 
    target = models.FloatField() 
    predict = models.FloatField()

    class Meta:

        db_table = 'result_DSL_FlashPt' 

class TarD5(models.Model):
    date = models.DateTimeField(db_column='DATE') 
    target = models.FloatField() 
    predict = models.FloatField()

    class Meta:

        db_table = 'result_TarD5' 

class NaphD95(models.Model):
    date = models.DateTimeField(db_column='DATE') 
    target = models.FloatField() 
    predict = models.FloatField()

    class Meta:
    
        db_table = 'result_NaphD95' 

