import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  
  features: FeatureCard[] = [
    {
      icon: 'assignment_turned_in',
      title: 'Easy Application',
      description: 'Submit your building permit applications with just a few clicks',
      link: '/dashboard/apply'
    },
    {
      icon: 'track_changes',
      title: 'Track Progress',
      description: 'Real-time updates on your application status',
      link: '/dashboard/status'
    },
    {
      icon: 'devices',
      title: 'Mobile Friendly',
      description: 'Access the system from any device, anywhere',
      link: '/mobile'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Our team is always here to help you',
      link: '/support'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      role: 'Architect',
      content: 'This platform has streamlined our permit application process by 70%. Highly recommended!',
      avatar: 'assets/images/avatar1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Construction Manager',
      content: 'The real-time tracking feature is a game-changer for our project management.',
      avatar: 'assets/images/avatar2.jpg'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const user = this.authService.getLoggedInUser();
    this.isLoggedIn = !!user;
    this.userName = user?.fullName || user?.username || '';
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }

  getDashboardLink(): string {
    const user = this.authService.getLoggedInUser();
    if (!user) return '/login';
    
    switch(user.role) {
      case 'admin':
        return '/dashboard/admin';
      case 'owner':
        return '/dashboard/owner';
      case 'consultant':
        return '/dashboard/consultant';
      case 'engineer':
        return '/dashboard/engineer';
      default:
        return '/dashboard';
    }
  }
}
