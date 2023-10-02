function getSetts() {

    var start_time = document.getElementById("id_start").value;
    var end_time = document.getElementById("id_end").value;
    document.getElementById("start_time").innerHTML = start_time;
    document.getElementById("end_time").innerHTML = end_time;

    var mode = document.getElementsByName('work_mode');
    for (i = 0; i < mode.length; i++) {
              if (mode[i].checked)
                  document.getElementById("mode_res").innerHTML
                      = mode[i].value;
          }

      let checkboxes = document.querySelectorAll('input[name="work_days"]:checked');
      let values = [];
      checkboxes.forEach((checkbox) => {
          values.push(checkbox.value);
      });
      document.getElementById("days_res").innerHTML
                      =values;
  }