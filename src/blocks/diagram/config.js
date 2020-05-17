const config = {
  size: 100,
  total: 1040,
  labels: {
    show: true,
    unit: 'голосов'
  },
  sectors: [
    {
      name: 'Великолепно',
      value: 520,
      gradient: [
        { offset: 0, color: '#FFE39C' },
        { offset: 100, color: '#FFBA9C' }
      ]
    },
    {
      name: 'Хорошо',
      value: 260,
      gradient: [
        { offset: 0, color: '#6FCF97' },
        { offset: 100, color: '#66D2EA' }
      ]
    },
    {
      name: 'Удовлетворительно',
      value: 260,
      gradient: [
        { offset: 0, color: '#BC9CFF' },
        { offset: 100, color: '#8BA4F9' }
      ]
    },
    {
      name: 'Разочарован',
      value: 0,
      gradient: [
        { offset: 0, color: '#919191' },
        { offset: 100, color: '#3D4975' }
      ]
    }
  ]
};

export default config;
