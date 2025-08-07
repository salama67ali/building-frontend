import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

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
  isLoggedIn = false;
  userName = '';
  
  features = [
    {
      icon: 'speed',
      title: 'Fast Processing',
      description: 'Get your building permissions processed quickly and efficiently.',
      link: '/features/fast-processing'
    },
    {
      icon: 'security',
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security.',
      link: '/features/security'
    },
    {
      icon: 'insights',
      title: 'Real-time Tracking',
      description: 'Track your application status in real-time.',
      link: '/features/tracking'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Our support team is always available to help you.',
      link: '/features/support'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Architect',
      content: 'This platform has revolutionized how I handle building permissions. The process is now seamless and transparent.',
      avatar: 'assets/images/testimonials/avatar1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Construction Manager',
      content: 'The real-time tracking feature has saved us countless hours of follow-up calls and emails.',
      avatar: 'assets/images/testimonials/avatar2.jpg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Property Developer',
      content: 'As someone who manages multiple projects simultaneously, this platform has been a game-changer for our workflow.',
      avatar: 'assets/images/testimonials/avatar3.jpg'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    if (this.isLoggedIn) {
      const user = this.authService.getLoggedInUser();
      if (user) {
        this.userName = user.name || user.username || '';
      }
    }
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  getDashboardLink(): string {
    // This could be more sophisticated based on user role
    return '/dashboard';
  }
}
