import { JSX } from "react";
import { PureIncrement } from 'pure_counter';

interface StatItemProps {
  icon: string;
  endValue: number;
  title: string;
  description: string;
}

const StatItem = ({ icon, endValue, title, description }: StatItemProps) => (
  <div className="col-lg-3 col-md-6">
    <div className="stats-item">
      <i className={`bi ${icon}`}></i>
      <PureIncrement start={0} end={endValue} duration={1} className="purecounter" />
      <p><strong>{title}</strong> <span>{description}</span></p>
    </div>
  </div>
);

export default function StatSection(): JSX.Element {
  const stats = [
    { icon: "bi-emoji-smile", endValue: 8, title: "Happy Clients", description: "" },
    { icon: "bi-journal-richtext", endValue: 13, title: "Projects", description: "" },
    { icon: "bi-headset", endValue: 500, title: "Hours Of Support", description: "" },
    { icon: "bi-people", endValue: 3, title: "Hard Workers", description: "" }
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
