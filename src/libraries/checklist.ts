import type { Checks } from './common'
import { v4 as uuid_v4 } from 'uuid'

export const legal_checklist: Checks[] = [
  {
    id: uuid_v4(),
    question:
      'Check the task location on any of the CASA-approved apps - the information on these apps can be relied on absolutely.',
    selection: [
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
    id: 'flight-issues',
    question: 'Are there any issues with flying in this area?',
    comments: true
  },
  {
    id: uuid_v4(),
    question:
      'Is the task to be in accordance with the conditions listed in either the schedule for the ReOC or other regulatory Approvals, Permissions or Exemptions?'
    // show_if: {
    //   method: 'or',
    //   prerequisites: new Map([['flight-issues', true]])
    // }
  },
  {
    id: uuid_v4(),
    question: 'Is the task to be conducted above 400 ft AGL?'
  },
  {
    id: uuid_v4(),
    question: 'In which airspace is the task to be conducted?',
    options: [
      'Class A',
      'Class B',
      'Class C',
      'Class D',
      'Class E',
      'Class G',
      'CTA',
      'CTR',
      'Restricted',
      'Danger'
    ],
    comments: 'Detail airspace and general aviation requirements...'
  },
  {
    id: 'within-3nm',
    question:
      'Is the task within 3 NM of any aerodrome (including any HLS or ALA shown on the App you consulted)?',
    comments: 'Detail Aerodrome / HLS details...'
  },
  {
    id: 'on-approach',
    question:
      'Is the task within the approach or departure path of a runway or over a movement area?'
  },
  {
    id: 'populous',
    question: 'Is the task to be conducted over a populous area?'
  },
  {
    id: 'within-30m',
    question:
      'Is the task to be conducted closer than 30m from any person who is not directly involved in operation of the RPAS?'
  },
  {
    id: 'bvlos',
    question: 'Is the task to be conducted beyond VLOS?'
  },
  {
    id: 'at-night',
    question: 'Is the task to be conducted at night, in cloud, or in conditions other than Day VMC?'
  },
  {
    id: 'permission-required',
    question: 'Is CASA permission required?',
    image: '/media/radio_flow.png',
    show_if: {
      method: 'or',
      prerequisites: new Map([
        ['within-3nm', true],
        ['on-approach', true],
        ['populous', true],
        ['within-30m', true],
        ['bvlos', true],
        ['at-night', true]
      ])
    }
  },
  {
    id: 'permission-requested',
    question: 'Has CASA authorization been requested?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['permission-required', true]])
    }
  },
  {
    id: 'permission-approved',
    question: 'Has CASA approved the application?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['permission-requested', true]])
    }
  },
  {
    id: 'notam-submitted',
    question: 'Has a NOTAM been submitted via CASA to Airservices Australia?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['permission-approved', true]])
    }
  },
  {
    id: 'notam-published',
    question: 'Has the NOTAM been published?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['notam-submitted', true]])
    }
  },
  {
    id: 'council-permission',
    question: 'Is the permission of any Local Government (Council) required?'
  },
  {
    id: uuid_v4(),
    question: 'Has council permission been obtained?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['council-permission', true]])
    }
  },
  {
    id: 'landowner-permission',
    question: 'Is any landowner or business owner permission required?'
  },
  {
    id: uuid_v4(),
    question: 'Has that landowner permission been obtained?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['landowner-permission', true]])
    }
  },
  {
    id: uuid_v4(),
    question: 'Are there any privacy considerations?'
  },
  {
    id: 'stakeholder-information',
    question: 'Do any nearby "relevant stakeholders" need to be informed of the task?'
  },
  {
    id: uuid_v4(),
    question: 'Has that information been provided to the "relevant stakeholders"?',
    show_if: {
      method: 'or',
      prerequisites: new Map([['stakeholder-information', true]])
    }
  },
  {
    id: uuid_v4(),
    question: 'Will the task create a hazard to another aircraft, another person or property?'
  }
]

export const planning_checklist: Checks[] = [
  {
    id: uuid_v4(),
    question: 'Maps and charts available and checked?'
  },
  {
    id: uuid_v4(),
    question: 'Are there any NOTAMs affecting the task? (Check via NAIPS).'
  },
  {
    id: uuid_v4(),
    question: 'Take Off & Landing area identified?'
  },
  {
    id: uuid_v4(),
    question: 'Ability to maintain visual line of sight (VLOS)?'
  },
  {
    id: uuid_v4(),
    question: 'Ability to maintain 30m separation from public?'
  },
  {
    id: uuid_v4(),
    question: 'Possibility of public moving into area?'
  },
  {
    id: uuid_v4(),
    question: 'Are signage / witches hats needed at the task site?'
  },
  {
    id: uuid_v4(),
    question: 'Remote Pilot’s ability matches location/task?'
  },
  {
    id: uuid_v4(),
    question: 'Obstructions - buildings'
  },
  {
    id: uuid_v4(),
    question: 'Obstructions - trees'
  },
  {
    id: uuid_v4(),
    question: 'Obstructions - power lines'
  },
  {
    id: uuid_v4(),
    question: 'Obstructions - towers and supporting cables'
  },
  {
    id: uuid_v4(),
    question: '"Return to Home" height determined?',
    label: 'Height',
    ticker: true
  },
  {
    id: uuid_v4(),
    question: 'Is the task to be performed at a specific height?',
    label: 'Height',
    ticker: true
  },
  {
    id: uuid_v4(),
    question:
      'Possible interference to RPAS control (due to power lines / antennas / transmitters / other RPAS)?'
  },
  {
    id: uuid_v4(),
    question: 'Are there any job-specific threat and error management issues?'
  },
  {
    id: uuid_v4(),
    question:
      'Does the site itself pose any significant risk concerns that require specific mitigation?'
  },
  {
    id: uuid_v4(),
    question: 'Is a formal Risk Assessment necessary in addition to this JSA?'
  }
]

export interface ChecklistSection {
  title: string
  checks: Checks[]
}

export const checklist: ChecklistSection[] = [
  {
    title: 'Area Considerations',
    checks: legal_checklist
  },
  {
    title: 'Planning Considerations',
    checks: planning_checklist
  }
]
