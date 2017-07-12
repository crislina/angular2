import { Component, OnInit } from '@angular/core';
import { WebServiceApi } from './../../../services/api/WebServiceApi';
import { City } from './../../../services/model/city';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	Cities: City[];
	pageIndex = 1;
	itemsPerPage = 6;
	totalPages = 1;
	frontPaginationDisabled = false;
	rearPaginationDisabled = false;
	constructor(private webService:WebServiceApi){}

	ngOnInit() {
  		this.Cities=this.webService.Cities;
  		this.updatePagination();
	}

	showCities(): City[]{
		if(this.Cities !== null && this.Cities.length > 0){
			const firstIndex = (this.pageIndex-1)*this.itemsPerPage;
			return this.Cities.slice(firstIndex,firstIndex+this.itemsPerPage);
		}
	}
	jumpTo(pageNum:number){
		if(pageNum>1 && pageNum<=this.totalPages){
			this.pageIndex=pageNum;
			console.log(pageNum);
			this.updatePagination();
		}
	}
	updatePagination(){
		try{
			this.totalPages=Math.ceil(this.Cities.length/this.itemsPerPage)
			if(this.noMorePage()){
				if(this.totalPages>1){
					this.frontPaginationDisabled=true;
					this.rearPaginationDisabled=false
				}else{
					this.frontPaginationDisabled=false;
					this.rearPaginationDisabled=false;
				}
			}else if(this.pageIndex=1){
				if(this.noMorePage()){
					this.frontPaginationDisabled = false;
					this.rearPaginationDisabled=false;
				}else{
					this.frontPaginationDisabled = false;
					this.rearPaginationDisabled=true;
				}
			}
		}catch(e){
			console.log(e);
		}
		
	}

	noMorePage(){
		return this.pageIndex*this.itemsPerPage>=this.Cities.length;
	}
}
