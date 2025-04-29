import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardComponent } from '../../atom/card/card.component';

interface EventItem {
  title?: string;
  subtitle?: string;
  img?: string;
  desc?: string;
  icon?: string;
  even?: boolean;
}

@Component({
  selector: 'app-timeline',
  imports: [TimelineModule, CardComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: EventItem[];

  constructor() {
     this.events = [
            { title: 'UNC Chapel Hill - Computer Science', subtitle: 'Aug 2017 - Dec 2020', img: '/img/UNC.jpg',
              desc: 'Activities and societies: HackNC, VR Research, Undergraduate Library Worker, Women in Computer Science', icon: 'pi pi-graduation-cap', even: false },
            { title: 'Undergaduate Library - VR Service Attendant', subtitle: 'Aug 2017 - Dec 2020', img: '/img/UNC.jpg',
              desc: 'As I attended college I was afforded the opportunity to pursue a work study position. The VR station in the library was a positive position in which I was able to bring emerging tech to the fore ront of user friendliness via HCI and UX research for what best would serve the users within our library.', icon: 'pi pi-briefcase', even: true },
            { title: 'Whirlpool - VR Game Engineer', subtitle: 'Mar 2018 - Apr 2019', img: '/img/whirlpool.png',
              desc: 'I help Whirlpool explore the capabilities of VR in a service field for training exercises and equipment teardowns. They want to be able to expand this to have many uses in assisting our service field workers in education and experience with products and their procedures.', icon: 'pi pi-briefcase', even: false },
            { title: 'Fidelity Investments - Software Engineer', subtitle: 'Jan 2021 - May 2022', img: '/img/fidelity.png', desc: 'Along side team Fuego, I worked in an agile environment to serve ADA compliant and user friendly interfaces for the workplace investing firm within Fidelity. I worked on several side projects within the company not only being an asset to my own team but to others as well.', icon: 'pi pi-briefcase', even: true },
            { title: 'MNC Software - Software Engineer II', subtitle: 'Jun 2022 - Feb 2023', img: '/img/mnc.webp', desc: 'Attended', icon: 'pi pi-briefcase', even: false },
            { title: 'UOPX - Software Engineer II', subtitle: 'Mar 2023 - Present', img: '/img/bird-logo.png', desc: 'Attended', icon: 'pi pi-briefcase', even: true },
        ];
  }
}