import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskCard from '../components/tasks/TaskCard';

const task = {
  id: 1,
  title: 'Test Task',
  visible: true,
  complet: false,
};

test('affiche le titre de la tâche', () => {
  render(<TaskCard task={task} />);
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});