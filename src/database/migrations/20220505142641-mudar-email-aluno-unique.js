module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNul: false,
      unique: true,
    },
  ),

  down: async () => { },
};
