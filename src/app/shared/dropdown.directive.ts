import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostListener('click') onClick() {
        const sibling = this.el.nativeElement.nextElementSibling;
        if (sibling) {
            sibling.classList.toggle('hidden');

        }
    }

    constructor(private el: ElementRef) { }

}