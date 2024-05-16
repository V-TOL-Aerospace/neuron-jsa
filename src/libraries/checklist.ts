import type { Checks } from './common'

export const checklist: Checks[] = [
  {
    id: String(self.crypto.randomUUID()),
    question:
      'Check the task location on any of the CASA-approved apps - the information on these apps can be relied on absolutely.',
    options: [
      'AALTI',
      'Aerologix',
      'AEROphoria',
      'RPA Manager',
      'Curo by Sphere Drones',
      'FlyFreely',
      'Fly.Yobe',
      'ok2fly',
      'OpenSky',
      'ScaleFlyt',
      'SmartSkies'
    ]
  },
  {
    id: String(self.crypto.randomUUID()),
    question: 'Are there any issues with flying in this area?',
    comments: true
  }
]
