type Project = {
  launch: string;
  description: string;
  skills: string;
  duration: string;
  hours: string;
};

type Props = {
  data: Project[];
};

export default function ProjectTable({ data }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Launch</th>
            <th>Description</th>
            <th>Skills</th>
            <th>Duration</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr key={index}>
              <td>{project.launch}</td>
              <td>{project.description}</td>
              <td>{project.skills}</td>
              <td>{project.duration}</td>
              <td>{project.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
