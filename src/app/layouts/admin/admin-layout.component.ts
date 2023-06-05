import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { NavItemI } from "src/app/shared/primary-components/sidebar/sidebar.interface";

@Component({
    selector: 'app-admin-layout',
    templateUrl: 'admin-layout.component.html',
    styleUrls: ['admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

    
    navItems!: NavItemI[];
    selectedItemId!: string;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.setNavItems();
        this.detectActiveNavigationItem();
    }

    setNavItems() {
        this.navItems = [
            {
            id: 'dashboard',
            label: 'Dashboard',
            icon: 'pie-chart'
            },
           {
            id: 'users',
            label: 'Users',
            icon: 'users'
            },
           {
            id: 'groups',
            label: 'Groups',
            icon: 'grid'
            },
           {
            id: 'homework',
            label: 'Homework',
            icon: 'home'
            }    
        ]
    }


    detectActiveNavigationItem(): void {
        const selectedItem = this.navItems.find(item => this.router.url.includes(item.id));
        if (!selectedItem) {
            this.selectedItemId = this.navItems[0].id;
            return;
        } 
        this.selectedItemId = selectedItem.id;        
    }

    navItemsClickHandler(id: string) {
        this.selectedItemId = id;
        switch (id) {
            case 'dashboard':
                this.router.navigateByUrl('admin')
            break;
            case 'users':
                this.router.navigateByUrl('admin/users')
            break;
            case 'groups':
            this.router.navigate(['admin/groups'])
            break;
            case 'homework':
            this.router.navigate(['admin/homework'])
            break;
        }
    }

}