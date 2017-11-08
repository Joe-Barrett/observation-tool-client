var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"project","loadChildren":"./observation-tool/project/project.module#ProjectModule"},{"path":"","redirectTo":"project","pathMatch":"full"}],"kind":"module"},{"name":"routes","filename":"src/app/observation-tool/pi-select/pi-select-routing.module.ts","module":"PiSelectRoutingModule","children":[{"path":"","component":"PiSelectComponent","children":[{"path":"pi-entry","component":"PiEntryComponent"},{"path":"pi-results","component":"PiResultsComponent"},{"path":"","redirectTo":"pi-entry","pathMatch":"full"}]}],"kind":"module"},{"name":"routes","filename":"src/app/observation-tool/project/project-routing.module.ts","module":"ProjectRoutingModule","children":[{"path":"project","component":"ProjectComponent","children":[{"path":"pi-select","loadChildren":"../pi-select/pi-select.module#PiSelectModule"},{"path":"proposal","component":"ProposalComponent"},{"path":"planned-observing","component":"PlannedObservingComponent"},{"path":"science-goals","loadChildren":"../science-goal/science-goal.module#ScienceGoalModule"},{"path":"","redirectTo":"pi-select","pathMatch":"full"}]},{"path":"","redirectTo":"project/pi-select","pathMatch":"full"}],"kind":"module"},{"name":"routes","filename":"src/app/observation-tool/science-goal/science-goal-routing.module.ts","module":"ScienceGoalRoutingModule","children":[{"path":"","component":"ScienceGoalComponent","children":[{"path":"general","component":"GeneralComponent"},{"path":"field-setup","component":"FieldSetupComponent"},{"path":"spectral-setup","component":"SpectralSetupComponent"},{"path":"calibration-setup","component":"CalibrationSetupComponent"},{"path":"control-performance","component":"ControlPerformanceComponent"},{"path":"technical-justification","component":"TechnicalJustificationComponent"},{"path":"","redirectTo":"general","pathMatch":"full"}]}],"kind":"module"}]}
