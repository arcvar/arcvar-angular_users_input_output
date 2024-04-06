import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent {
  @Input() singleUser: string;
  @Input() userIndex: number;
  @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
}
