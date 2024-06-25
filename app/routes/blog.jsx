export const meta = () => {
    return [
      { title: 'F1LAB' },
      { name: 'Блог', content: 'Welcome to Remix!' },
    ];
  };

export default function Services() {
    return (
      <div className='text-5xl font-title p-5'>
        Блог
      </div>
    );
  }