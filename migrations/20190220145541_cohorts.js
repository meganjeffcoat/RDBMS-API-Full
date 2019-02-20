//changes to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', function(tbl) {
      // primary key called id, integer, auto-increment
      tbl.increments();
  
      tbl
        .string('name', 128)
        .notNullable()
        .unique('uq_cohort_name');
  
      tbl.timestamps(true, true);
    });
  };
  
  // undo changes
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
  };
