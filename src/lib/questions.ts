export const questions = [
	{
		id: 1,
		question: 'Welcher der folgenden Rechtsbegriffe charakterisiert CERT.at?',
		answers: [
			[true, 'GMBH'],
			[true, 'Beliehener'],
			[true, 'Behörde im funktionalen Sinn'],
			[false, 'Nachgeordnete Dienststelle des Bundeskanzleramts']
		],
		info: ``
	},
	{
		id: 2,
		question:
			'Welche Pflichten treffen einen Betreiber eines wesentlichen Dienstes unter dem NIS-Gesetz?',
		answers: [
			[true, 'Sicherheitsvorfälle an das zuständige Computer-Notfallteam melden'],
			[
				true,
				'Betreiber muss bestimmte Sicherheitsmaßnahmen treffen, die von der NIS-Verordnung genauer spezifiziert werden'
			],
			[
				false,
				'Er muss bei einem Sicherheitsvorfall erst alle Informationen sammeln, die damit in Zusammenhang stehen können und erst dann eine vollständige Meldung abgeben'
			],
			[false, 'Betreiber muss getroffene Sicherheitsmaßnahmen an den Bundeskanzler melden']
		],
		info: `Minister für Inneres ist es nicht zu melden
Gemeldet wird an CERT.at, welche dann den Innenminister weitergeleitet werden.
Verordnung vom Bundeskanzler erlassen
Innenministerium ist sowas wie Hilfsorganisation für Innenminister
Maßnahmen sind nicht zu melden, Innenminister darf jedoch Einschau halten`
	},
	{
		id: 3,
		question:
			'Welche der folgenden Institutionen erhalten von der österreichischen Strategie für Cybersicherheit 2021 eine Rolle zugewiesen?',
		answers: [
			[true, 'Bundesregierung'],
			[true, 'Cybersicherheitssteuerungsgruppe'],
			[true, 'Cybersicherheitsplattform'],
			[false, 'Äußere Kreis der operativen Koordinierungsstruktur']
		],
		info: `Der Kreis heißt korrekt Innerer Kreis operativer Koordinierungsstruktur`
	},
	{
		id: 4,
		question: 'Welche der folgenden Aufgaben nimmt der Bundeskanzler gemäß NIS-Gesetz wahr?',
		answers: [
			[true, 'Erlassen der NIS-Verordnung'],
			[true, 'Koordination und internationale Kooperation auf strategischer Ebene'],
			[true, 'Ermittlung der Betreiber der wesentlichen Dienste'],
			[false, 'Entgegennehmen von NIS-Meldungen']
		],
		info: `Entgegennehmen von NIS-Meldungen macht der Innenminister. Zuständigkeiten des Bundeskanzlers §4 NIS-Gesetz`
	},
	{
		id: 5,
		question:
			'Auf welchen Verfassungsrechtlichen Grundlagen fußt das österreichische Cybersicherheitsrecht?',
		answers: [
			[true, 'Art 10 Abs 1 Z7 B-VG'],
			[true, '§1 NIS-Gesetz'],
			[false, 'NIS-Richtlinie'],
			[false, 'Art 10 Abs 1 Z6 B-VG']
		],
		info: ``
	},
	{
		id: 6,
		question:
			'Fallbeispiel /// Embrionen-Bild /// Creative Commons geschützt /// CC-BY-ND Bedeutung:',
		answers: [
			[true, 'Urheber muss erwähnt werden'],
			[true, 'Das Werk darf vervielfältig werden'],
			[true, 'Das Werk darf kommerziell verwendet werden'],
			[false, 'Ich darf es bearbeiten']
		],
		info: `BY - Andere dürfen es kopieren, verteilen, zeigen und verändern, wenn Urheber erwähnt wird
ND - Verbietet Ableitungen des Werkes`
	},
	{
		id: 7,
		question:
			'Fallbeispiel /// ISC-Lizenz /// Software für beliebige Zwecke, wenn Copyright in allen Kopien',
		answers: [
			[true, 'Diese Lizenz ist permissive'],
			[true, 'Diese Lizenz ist kompatibel zu GPL'],
			[
				true,
				'Das Werk erfüllt die 4 wesentlichen Eigenschaften (use, study, improve, share) für freie Software (Free-Software-Foundation)'
			]
		],
		info: ``
	},
	{
		id: 8,
		question:
			'Fallbeispiel /// In welchem Jahr erlischt das Urheberrecht des Werkes X, wenn der Urheber im Jahr 2014 verstorben ist?',
		answers: [
			[true, '2084'],
			[false, '2071'],
			[false, '2090']
		],
		info: `70 Jahre nach dem Tod des Urhebers`
	},
	{
		id: 9,
		question:
			'Fallbeispiel /// Firma überwacht Angestellte (High-Performer VS Low-Performer) /// Ist eine Datenschutzfolgeabschätzung notwendig?',
		answers: [
			[
				true,
				'Für Verarbeitungsvorgänge, die eine Bewertung oder Einstufung natürlicher Personen zum Ziel haben, ist eine Datenschutzfolgeabschätzung notwendig.'
			],
			[
				false,
				'Für Verarbeitungsvorgänge, die Überwachung und Kontrolle von Personen mittels Videoüberwachung zum Ziel haben, ist eine Datenschutzfolgeabschätzung notwendig'
			],
			[false, 'Eine Datenschutzfolgeabschätzung ist nicht erforderlich']
		],
		info: ``
	},
	{
		id: 10,
		question:
			'Wie muss der Databridge gemeldet werden? Wie schnell ist die Behörde zu informieren?',
		answers: [
			[true, 'Die Datenschutzbehörde ist unverzüglich zu informieren'],
			[false, 'Ich behebe zuerst den Fehler und informiere dann die Datenschutzbehörde'],
			[
				false,
				'Auch wenn der Fehler nicht behoben werden kann, muss die Datenschutzbehörde nach spätestens 3 Tagen informiert werden'
			],
			[
				false,
				'Der Datenschutzbeauftragte ist unverzüglich zu informieren und dieser muss innerhalb von 72h den Dienst antreten'
			]
		],
		info: `Art. 33 DSGVO`
	},
	{
		id: 11,
		question: 'Ein mehrstufiges Mahnverfahren spielt eine Rolle bei ...',
		answers: [
			[true, 'nicht ordnungsgemäßer nationaler Umsetzung von EU-Richtlinien'],
			[false, 'Verfahren, die vom Bundespräsidenten durchgeführt werden'],
			[false, 'einer Beschwerde an den österreichischen Verfassungsgerichtshof'],
			[false, 'der Gesetzesbegutachtung auf Bundesebene']
		],
		info: `Erst wenn Mahnverfahren durch, dann kann Union beim Europäischen Gerichtshof klagen. Kommission
schreibt erstes Mahnschreiben. Zweites Mahnschreiben mit Drohung von Klage beim Europäischen
Gerichtshof.
Bundespräsident hat mit der Umsetzung des Unionsrechtes nicht zu tun.
Für eine Beschwerde beim VfGH müssen nur innerstaatliche Maßnahmen zuvor ausgeschöpft worden
sein. BZW: auch Individualbeschwerden → Dann geht das auch gleich!
`
	},
	{
		id: 12,
		question: 'Ein Gesetzesvorbehalt ...',
		answers: [
			[true, 'erlaubt die Einschränkung verfassungsgesetzlich gewährleisteter Rechte'],
			[true, 'erlaubt die Einschränkung von Grundrechten durch den einfachen Gesetzgeber'],
			[false, 'hat nichts mit Grundrechten zu tun'],
			[false, 'verpflichtet den Ministerrat zur einstimmigen Beschlussfassung']
		],
		info: `Kommt mit hoher Wahrscheinlichkeit zum nächsten Test!`
	},
	{
		id: 13,
		question:
			'Eine inhaltliche Umsetzung einer EU-Richtlinie durch innerstaatliches Recht der Mitgliedsstaaten ...',
		answers: [
			[
				true,
				'ist stets innerhalb der Umsetzungsfrist erforderlich und verpflichtend bei EU-Richtlinien'
			],
			[false, 'ist bei EU-Recht ganz generell/prinzipiell untersagt'],
			[false, 'ist nicht gestattet, da die EU-Richtlinie innerstaatlich direkt anwendbar ist']
		],
		info: `Eine EU-Verordnung wirkt unmittelbar, eine Richtlinie muss in nationales Recht eingebettet werden.`
	},
	{
		id: 14,
		question: 'Das Rechtsoasen-Phänomen entsteht durch ...',
		answers: [
			[true, 'gravierende Unterschiede im nationalen Recht von Staaten'],
			[false, 'das Veto-Recht im UN-Sicherheitsrat'],
			[
				false,
				'das Fehlen einer International Govermental Organisation mit international verbindlichen Polizeibefugnissen'
			],
			[false, 'den Umstand, dass Staatsbürger*innen immer nur ihr Heimatrecht einhalten müssen']
		],
		info: `Ausnützen jeweiliger nationaler Rechte für bestimmte Zwecke. (Lockerere Bestimmung für „Geschäfte“)
Leute, die darauf aufbauen, suchen nach der „weakest national legislation“, der schwächsten Gesetzesstrenge.`
	},
	{
		id: 15,
		question: 'Mit Julian Assange verbinde ich ...',
		answers: [
			[true, 'das Problem des diplomatischen Asyls'],
			[true, 'die Frage des Sanktionsbereichs des nationalen Rechts'],
			[true, 'WikiLeaks'],
			[false, 'den Tatortbegriff entsprechend dem völkerrechtlichen Plausibilitätsprinzips']
		],
		info: `Kommt vermutlich nicht zum nächsten Test, vielleicht allerdings der Europäische Journalist im Iran.`
	}
];
