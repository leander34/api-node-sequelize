module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'fotos',
    'aluno_id',
    {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  ),

  down: async () => { },
};
