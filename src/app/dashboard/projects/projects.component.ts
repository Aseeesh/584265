import { ProjectService } from './projects.service';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core'; 
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
 

export class ProjectsComponent implements OnInit {
  // It maintains list of projects
  projects: Project[] = [];
  // It maintains project Model
  regModel: Project;
  // It maintains project form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  clients: string[] = ['US', 'UK', 'India', 'UAE'];
  
  editState: boolean = false;
  projectToEdit: Project;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
     
    this.projectService.getProjects().subscribe(data => {
      this.projects = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Project;
      })
    });
  }


  
  create(project: Project){
    this.projectService.createProject(project);
    }

    update(project: Project) {
      this.projectService.updateProject(project);
    }

    delete(id: string) {
      this.projectService.deleteProject(id);
    }
  // This method associate to New Button.
  onNew() {
    // Initiate new project.
    this.regModel = new Project();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display project entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    
    if (this.submitType === 'Save') {
      // Push project model object into project list.
    //  this.projects.push(this.regModel);
      this.projectService.createProject(this.regModel);

    } else {
      this.projectService.updateProject(this.regModel);

      // Update the existing properties values based on model.
      // this.projects[this.selectedRow].firstName = this.regModel.firstName;
      // this.projects[this.selectedRow].lastName = this.regModel.lastName;
      // this.projects[this.selectedRow].dob = this.regModel.dob;
      // this.projects[this.selectedRow].email = this.regModel.email;
      // this.projects[this.selectedRow].password = this.regModel.password;
      // this.projects[this.selectedRow].country = this.regModel.country;
    }
    // Hide project entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new project.
    this.regModel = new Project();
    // Retrieve selected project from list and assign to model.
    this.regModel = Object.assign({}, this.projects[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display project entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(project: Project) {
    debugger;
    // Delete the corresponding project entry from the list.
   // this.projects.splice(index, 1);
  this.projectService.deleteProject(project.id);

  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide project entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
  //  this.regModel = country;
  }

}

