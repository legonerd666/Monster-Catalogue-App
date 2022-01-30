class Monster {
  id: number;
  name: string;
  species: string;
  color: string;
  appearance: string;
  size: string;
  statistics: string;
  abilities: string;
  description: string;
  habitat: string;
  notes: string;
  picture: string;
  bgcolor: string;

  constructor(
    id: number,
    name: string,
    species: string,
    color: string,
    appearance: string,
    size: string,
    statistics: string,
    abilities: string,
    description: string,
    habitat: string,
    notes: string,
    picture: string,
    bgcolor: string
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.color = color;
    this.appearance = appearance;
    this.size = size;
    this.statistics = statistics;
    this.abilities = abilities;
    this.description = description;
    this.habitat = habitat;
    this.notes = notes;
    this.picture = picture;
    this.bgcolor = bgcolor;
  }
}

export default Monster;
