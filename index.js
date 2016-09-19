'use strict'
var config = require('./config.json')
var TogglClient = require('toggl-api')
var toggl = new TogglClient({apiToken: config.token})
var _ = require('lodash')

/*toggl.startTimeEntry({
  description: 'Some cool work',
  billable:    true
}, function(err, timeEntry) {
  // handle error

  // working 10 seconds
  setTimeout(function() {
    toggl.stopTimeEntry(timeEntry.id, function(err) {
      // handle error

      toggl.updateTimeEntry(timeEntry.id, {tags: ['finished']}, function(err) {
        toggl.destroy()
      })
    });
  }, 120000)
})*/

toggl.getWorkspaceProjects("753170", {}, function(err, data){
  //console.log(data)
  let privateProject = _.filter(data, function(el){
    return el.is_private === true
  })

  console.log(privateProject[0])

  _.each(privateProject, function(project){
    //console.log(`${project.id}`)
    let projectID = project.id
    toggl.updateProject(project.id, {is_private:false}, function(err, projectData){
      if (err) {
        console.error(`Project ${projectID}, update err: ${err}`)
      } else {
        console.log(`Project update: ${projectData.id}`)
        //console.log(projectData)
      }
    })
  })
})
