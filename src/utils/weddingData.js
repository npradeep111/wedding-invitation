// Central place for all wedding details.
// Edit this file to update names, dates, venues and links across the whole site.

export const couple = {
  groom: 'Pavan',
  bride: 'Keerthana',
  groomFull: 'Pavan',
  brideFull: 'Keerthana',
}

export const events = [
  /*{
    id: 'haldi',
    name: 'Haldi Ceremony',
    date: 'Friday, August 21, 2026',
    isoDate: '2026-08-21T09:00:00',
    time: 'At 9:00 AM',
    venue: 'Smith Shelter, Queeny Park',
    mapsUrl: 'https://maps.app.goo.gl/4G8nDT6suuG8DCWW7?g_st=ic',
    description:
      'A joyful morning of turmeric, laughter and blessings as we mark the beginning of the celebrations.',
  },*/
  {
    id: 'wedding',
    name: 'Wedding Ceremony',
    date: 'Sunday, August 23, 2026',
    isoDate: '2026-08-23T11:23:00',
    time: 'At 11:23 AM',
    venue: 'Saint Louis Hindu Temple',
    mapsUrl: 'https://maps.app.goo.gl/hFyZJmE4QiTpNtpL9',
    description:
      'Sacred vows exchanged at the auspicious muhurtham, uniting two families as one.',
  },
]

// The primary countdown target shown on the hero section
export const primaryCountdownDate = events[0].isoDate

export const timeline = [
  /*{
    id: 'haldi',
    title: 'Haldi Ceremony',
    date: 'Aug 21, 2026',
    time: '9:00 AM',
    venue: 'Smith Shelter, Queeny Park',
  },*/
  {
    id: 'wedding',
    title: 'Wedding Ceremony',
    date: 'Aug 23, 2026',
    time: '11:23 AM',
    venue: 'Saint Louis Hindu Temple',
  },
]
