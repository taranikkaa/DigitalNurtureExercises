import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent], // <-- Imports go here!
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  courses: any[] = [];
  loading: boolean = false;
  private sub!: Subscription;
  
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
  this.loading = true;
  this.sub = this.courseService.getCourses().subscribe({
    next: (data) => {
      const englishCourseNames = [
        'Introduction to Web Development',
        'Database Management Systems',
        'Data Structures and Algorithms',
        'Cloud Computing with AWS',
        'Machine Learning Fundamentals'
      ];

      this.courses = data.map((item, index) => ({
       
        name: englishCourseNames[index] || item.title,
        code: `CS-${item.id}`,
        credits: (index % 3) + 2,
        grade: 'A'
      }));
      this.loading = false;
    },
    error: (err) => {
      console.error(err);
      this.loading = false;
    }
  });
}

  get filteredCourses() {
    return this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
