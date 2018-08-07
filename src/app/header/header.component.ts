import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        ul li a {
            cursor: pointer;
        }
    `]
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) {}
    
    onLogout() {
        this.authService.logout();
    }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {},
            (error) => console.log(error)
        );
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }
}