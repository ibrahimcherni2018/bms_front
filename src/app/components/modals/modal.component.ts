import { Component, OnInit, Input, Inject                                       } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher                       } from '@angular/material';
import { FormControl , FormGroupDirective, NgForm, Validators                   } from '@angular/forms';

import { CacheService                                                           } from '../../core/storage/cache.service';
import { DonorService                                                           } from '../../core/api/donor.service';
import { ProjectService                                                         } from '../../core/api/project.service';
import { SectorService                                                          } from '../../core/api/sector.service';

import { GlobalText                                                                  } from '../../../texts/global';
import { CriteriaService } from '../../core/api/criteria.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public modal = GlobalText.TEXTS;
  
  public entityInstance = null;
  public properties: any;
  propertiesTypes: any;
  public loadedData: any = [];
  newObject: any;
  public controls = new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    public _cacheService : CacheService,    
    public donorService : DonorService,    
    public sectorService : SectorService,    
    public projectService : ProjectService,    
    public criteriaService : CriteriaService,    
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  /**
   * check if the langage has changed
   */
  ngDoCheck() {
    if (this.modal != GlobalText.TEXTS) {
      this.modal = GlobalText.TEXTS;
    }
  }

  public closeDialog(): void {
    this.dialogRef.close(true);
  }

  /**
   * load data for selects
   */
  loadData(){
    if((this.newObject && this.newObject.sectors) || (this.data.data && this.data.data.sectors)){
      this.loadedData.sectors_name = this._cacheService.get(CacheService.SECTORS);
      if(!this.loadedData.sectors)
      this.sectorService.get().subscribe(response => {
        this.loadedData.sectors_name = response.json();
        this._cacheService.set(CacheService.SECTORS, this.loadedData.sectors_name);
      });
    }
    if((this.newObject && this.newObject.donors) || (this.data.data && this.data.data.donors)){
      this.loadedData.donors_name = this._cacheService.get(CacheService.DONORS);
      if(!this.loadedData.donors_name)
      this.donorService.get().subscribe(response => {
        this.loadedData.donors_name = response.json();
        this._cacheService.set(CacheService.DONORS, this.loadedData.donors_name);
      });
    }
    if((this.data.data && this.data.data.projects)){
      this.loadedData.projects_name = this._cacheService.get(CacheService.PROJECTS);
      if(!this.loadedData.projects)
      this.projectService.get().subscribe(response => {
        this.loadedData.projects_name = response.json();
        this._cacheService.set(CacheService.PROJECTS, this.loadedData.projects_name);
      });
    }
    if(this.newObject && this.newObject.field_string == ''){
      // this.loadedData.field_string = this._cacheService.get(CacheService.CRITERIAS);
      if(!this.loadedData.field_string)
      this.criteriaService.get().subscribe(response => {
        this.loadedData.field_string = response;
        this._cacheService.set(CacheService.CRITERIAS, this.loadedData.field_string);
      });
    }
    if(this.newObject && this.newObject.kind_beneficiary == ''){
      this.loadedData.kind_beneficiary = [{"field_string":this.modal.model_criteria_beneficiary}, {"field_string":this.modal.model_criteria_dependents}];
    }
  }
 
}

 /** Error when invalid control is dirty, touched, or submitted. */
 export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}