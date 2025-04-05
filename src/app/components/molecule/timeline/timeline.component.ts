import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardComponent } from '../../atom/card/card.component';
import { CommonModule } from '@angular/common';

interface EventItem {
  title: string;
  subtitle: string;
  img: string;
  chips: string[];
  desc: string;
  icon: string;
  even: boolean;
}

@Component({
  selector: 'app-timeline',
  imports: [TimelineModule, CardComponent, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: EventItem[];

  constructor() {
     this.events = [
            { title: 'UNC Chapel Hill - Computer Science', subtitle: 'Aug 2017 - Dec 2020', img: '/img/UNC.jpg', chips: ['OOP', 'Algorithms & Data structures', 'Files and Databases', 'Japanese'],
              desc: 'Pursuing Computer Science on full scholarship, I honed my skills in programming, algorithms, and software development while engaging in hands-on projects and research. A highlight of my college experience was studying abroad in Japan, where I immersed myself in a new culture while continuing my studies. Balancing rigorous coursework with global experiences, I developed both technical expertise and a broader perspective that has shaped my approach to problem-solving and innovation.', icon: 'pi pi-graduation-cap', even: false },
            { title: 'Undergaduate Library - VR Service Attendant', subtitle: 'Aug 2017 - Dec 2020', img: '/img/UNC.jpg', chips: ['HCI Research', 'UX/UI Design', 'A11y', 'VR Development'],
              desc: 'Through a work-study position, I assisted students and faculty with virtual reality technology, maintained VR equipment, and facilitated immersive learning experiences. I also had the opportunity to engage in VR research, exploring applications of virtual reality in education and interactive media. This experience deepened my technical skills and reinforced my passion for emerging technologies, blending hands-on support with innovative research.', icon: 'pi pi-briefcase', even: true },
            { title: 'Whirlpool - VR Game Engineer', subtitle: 'Mar 2018 - Apr 2019', img: '/img/whirlpool.png', chips: ['C#', 'Unity Engine', 'Lua', 'User Study'],
              desc: 'During my internship, I developed immersive virtual reality experiences to enhance user training and product visualization. I collaborated with a multidisciplinary team to design and optimize interactive simulations, leveraging game development principles and VR technology. This experience allowed me to refine my skills in 3D modeling, physics-based interactions, and performance optimization while gaining insight into the intersection of VR and the home appliance industry.', icon: 'pi pi-briefcase', even: false },
            { title: 'Fidelity Investments - Software Engineer', subtitle: 'Jan 2021 - May 2022', img: '/img/fidelity.png', chips: ['Agile', 'Angular', 'Spring Boot', 'AWS'], desc: 'In the Workplace Investing department I contributed to the development of financial applications that improved user experience and system efficiency. I collaborated with engineers and product managers to design, test, and deploy scalable software solutions. Through this experience, I strengthened my skills in full-stack development, agile methodologies, and cloud technologies while gaining valuable insight into the fintech industry.', icon: 'pi pi-briefcase', even: true },
            { title: 'MNC Software - Software Engineer II', subtitle: 'Jun 2022 - Feb 2023', img: '/img/mnc.webp', chips: ['Angular', 'Typescript', 'PrimeNG', 'AGGrid'], desc: 'In a dynamic startup environment where innovation and agility are key, I worked closely with a small, cross-functional team to develop and scale software solutions, rapidly iterating on ideas and adapting to evolving challenges. This role has sharpened my ability to wear multiple hats—contributing to architecture design, coding, and deployment—while embracing the fast-paced, hands-on culture of a growing company.', icon: 'pi pi-briefcase', even: false },
            { title: 'UOPX - Software Engineer II', subtitle: 'Mar 2023 - Present', img: '/img/bird-logo.png', chips: ['React', 'NextJS', 'MUI Design', 'AWS'], desc: 'I played a key role in developing, migrating and enhancing the MyPhoenix student portal, the primary interface for thousands of students. Working on high-impact projects, I contributed to features that improved user experience, accessibility, and system performance across the organization. This role allowed me to collaborate with cross-functional teams to deliver scalable solutions, ensuring that my work brought value organization-wide while directly shaping the student journey.', icon: 'pi pi-briefcase', even: true },
        ];
  }
}