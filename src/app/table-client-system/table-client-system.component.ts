import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'tableData',
  templateUrl: './table-client-system.component.html',
  styleUrls: ['./table-client-system.component.css']
})
export class TableClientSystemComponent implements OnInit {

posts: any = [] ;
url= 'https://devbackend.gscmaven.com:8443/omsservices/webapi/systemconfig';
editRowId: any;
editRowName: any;
headers: Headers;

form = new FormGroup({
  name: new FormControl(),
  id: new FormControl()
});
constructor(private http: Http, private route: Router) {
      http.get(this.url).subscribe(response => this.posts = response.json());
    }

    get userInformation(){
      // tslint:disable-next-line:prefer-const
      let body = {
        tableClientSystemConfigConfigName: this.UserName,
        tableClientSystemConfigValue: this.UserPrice
      };
      return body;
    }

 get UserName() {
   return this.form.get('name').value;
 }

 get UserPrice() {
   return this.form.get('id').value;
 }

    toggle(id) {
      this.editRowId = id;
    }
    // get data() {
    //   return
    // }


    toggling(name) {
      this.editRowName = name;
    }

    update(post) {
      // tslint:disable-next-line:max-line-length
      let value = {tableClientSystemConfigConfigName: post.tableClientSystemConfigConfigName.value, tableClientSystemConfigValue: post.tableClientSystemConfigValue.value};
       this.http.put(this.url + '/' + post.idtableClientSystemConfigId, this.userInformation  ).subscribe(response => response.json());
    }

  ngOnInit() {
  }

}
