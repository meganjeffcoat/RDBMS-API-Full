
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Megan', cohort_id:1 },
        { name: 'Josh', cohort_id:2 },
        { name: 'John', cohort_id:3 },
      ]);
    });
};