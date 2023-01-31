import React from 'react'

const DatatableContext = React.createContext([
    {
      character: "Xiao",
      element: 'Anemo',
      role: 'DPS',
      level: 90,
      weapon: 'Primordial Jade Winged-Spear',
      artifactSet: ['Viridescent + Gladiator'],
      notes: 'Glass cannon'
    },
    {
      character: "Jean",
      element: 'Anemo',
      role: 'Healer',
      level: 90,
      weapon: 'Favonious Sword',
      artifactSet: ['Viridescent + Gladiator'],
      notes: 'Battery for Xiao plus a great healer'
    }, {
      character: "Albedo",
      element: 'Geo',
      role: 'Support',
      level: 90,
      weapon: 'Cinnabar Spindle',
      artifactSet: ['Opulent'], // TODO: make artifact type
      notes: 'Extra DMG and bonus shield with elemental reactions'
    }, {
      character: "Fischl",
      element: 'Electro',
      role: 'Support',
      level: 90,
      weapon: 'Favonious Bow',
      artifactSet: ['Shimenawa + Thunder'],
      notes: 'Extra energy, extra DMG and reactions'
    },
])

export default DatatableContext
