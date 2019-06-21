const {
  exec
} = require('child_process');
exec('jest --silent', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    exec('git reset --hard', (err, stdout, stderr) => {
      console.log(`CODE REVERTED`);
    });
  } else {
    let date = new Date(Date.now());

    exec(`git commit -a -m "TCR @ ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}"`,
      (err, stdout, stderr) => {
        console.log(`CODE COMMITED`);
      });
  }

  // the *entire* stdout and stderr (buffered)

  console.log(`stderr: ${stderr}`);
});