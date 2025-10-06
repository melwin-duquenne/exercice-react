import React from 'react';

export type Task = {
  id: number;
  title: string;
  visible: boolean;
  complet: boolean;
};

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <div
    style={{
        color: '#333',
      border: '1px solid #ddd',
      borderRadius: 12,
      boxShadow: '0 2px 8px #0001',
      padding: '1.5rem',
      minWidth: 220,
      background: task.visible ? '#9bff9bff' : '#fcfcfcff',
      position: 'relative',
    }}
  >
    <div style={{ position: 'absolute', top: 12, right: 16, fontSize: '0.9rem', color: '#888' }}>ID: {task.id}</div>
    <h2 style={{ margin: '0 0 0.5em 0', fontSize: '1.3rem' }}>{task.title}</h2>
    <p style={{ margin: 0 }}>
      Statut : {task.complet ? (
        <span style={{ color: 'green', fontWeight: 600 }}>Complet</span>
      ) : (
        <span style={{ color: 'orange', fontWeight: 600 }}>En cours</span>
      )}
    </p>
    <p style={{ margin: '0.5em 0 0 0', fontSize: '0.95rem' }}>
      {task.visible ? 'Visible' : 'Non visible'}
    </p>
  </div>
);

export default TaskCard;
