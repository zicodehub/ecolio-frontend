let DATA = {
	configs: {
		x: 30,
		y: 10,
		dh: 8
	},
	niveaux : [
		{
			nomNiveau: "6e",
			classes : [
				{
					nomClasse: "6e A",
					schedule: [
						{
							x: 0,
							y: 0,
							matiere: "Histoire-Géo",
							enseignant: "Vé"
						},
						{
							x: 0,
							y: 1,
							matiere: "Maths",
							enseignant: "ZAMBI"
						},
						{
							x: 0,
							y: 2,
							matiere: "Graphes",
							enseignant: "Pacome"
						}
					]
				}
			]
		}
	],

	enseignants: [
		{
			nomEnseignant: "Vé",
			matieres: [ "Histoire-Géo" ],
			classes: [ "6e A" ],
			schedule: [
				{
					x: 0,
					y: 0,
					matiere: "Histoire-Géo",
					classe: "6e A"
				},

			]
		},
		{
			nomEnseignant: "ZAMBI",
			matieres: [ "Maths" ],
			classes: [ "6e A" ],
			schedule: [
				{
					x: 0,
					y: 1,
					matiere: "Maths",
					classe: "6e A"
				},

			]
		},
		{
			nomEnseignant: "Pacome",
			matieres: [ "Graphes" ],
			classes: [ "6e A" ],
			schedule: [
				{
					x: 0,
					y: 0,
					matiere: "Graphes",
					classe: "6e A"
				},

			]
		}
	]
}

localStorage.setItem('SCHEDULE DATA', JSON.stringify(DATA) )
// export default DATA