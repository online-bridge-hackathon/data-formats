# Convention Card / System Notes Structure

**Convention cards** are the means by which bridge players inform their opponents of their agreements. Usually they are printed on a single sheet of paper in a format standardized by the national bridge organization (NBO) that is sanctioning the event.

**Systems notes** can be far more detailed that a convention card, and are used by bridge partners to document their agreements. They may include expanded notes on conventions, which in turn may include sample (or complete) sets of bidding sequences that elucidate the convention.

We propose a standardized structure that can accommodate both. A partnership can record their system notes, and from that structure, output a convention card in whichever format is desired.

In addition, it is desirable to create a library of conventions, available privately or publicly, that could be added to a player's system notes.

## Platforms

A stand-alone platform could serve as a general repository for system notes and conventions, as well as the authoritative source of valid formats. Users could create system notes files and share with others with specified permissions.

The platform could also host a library of conventions. The author of a convention entry could provide a detailed explanation and links to external sources. Users could incorporate a convention by reference, or clone the convention for further modification. The original author of the convention writeup may choose to have their name and links retained in any clones. [Much more thought is needed on how this should work. It is envisioned that common conventions may have many entries, so a convention name could appear as `Beginner Stayman [by Jane Doe]`]

Other platforms could connect to the stand-alone platform to permit users to specify a convention card for an online game.

Teachers and web site authors could promote their conventions within the stand-alone platform, which would in turn link to the teacher/author website. Teachers could also create a series of convention cards that would be used progressively over a series of lessons.

Other website feature possibilities include comparing cards and conducting a partnership interview to develop a new card.

Online platforms utilizing the format could provide auto-alerts and/or bidding explanations for sufficiently described conventions.

## Format Requirements

Two formats are needed:

- one to define the fields and requirements for convention cards by a given NBO. For example, and EBU convention card may require the pair to specify if their 1NT opening may include a singleton, whereas an ACBL convention card may not.

- another to define the content of the system notes.

For example, Ann from America might have a file for her system notes that conforms to ACBL requirements. Her editor program will inform her if she is missing information required by ACBL convention cards. When she plays in a UK game, her editor can print in the EBU format, and prompt her to add any additional required fields.

## A Note on Suit Symbols

Suit symbols may be specified using the ! format, e.g. !c will render as the club symbol when displayed. Suit symbols will be parsed in field content, field labels, and option labels, including labels parsed from ids (e.g., a field id could be `2!c_opening`.

## Convention Card Structure Format

These specifications will use YAML to define formats, although of course a consumer of the file could convert to whatever is needed.

At a minimum, a structure must define its usage, version, and sections of content by category. Only one category will be required, named _general_. The general category must include a title field. So the minimum structure is:

    ---
    format: <format name>
    version: <version number>
    sections:
      general:
      fields:
        - id: title
          required: true

Each section is composed of fields and optionally an array of conventions. Including the conventions array implies that conventions may be added to that section. It is recommended to specify a `notes` field for each section. For example:

    ---
    format: ACBL_CC
    version: 0.1
    sections:
      general:
        fields:
          - id: title
            required: true
          - id: notes
            type: textarea
      other_conventional_calls:
        fields:
          - id: notes
            type: textarea
        conventions: []

Fields must include an id, which must be unique within the section. Additional attributes may be included.

A standardized set of section names needs to be developed. These could include (adapted from ACBL style card):

- `general`
- `no_trump_openings`
- `major_openings`
- `two_level_openings`
- `other_conventional_calls`
- `preempts`
- `special_doubles`
- `simple_overcalls`
- `no_trump_overcalls`
- `defense_against_no_trump`
- `over_opponent_takeout_double`
- `over_opponent_preempt`
- `direct_cue_bids`
- `slam_conventions`
- `leads`
- `defensive_carding`

#### Field attributes

| attribute    | required?                         | default                                                                             | definition                                                                                           |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| id           | yes                               |                                                                                     | field name, in snake case (e.g., `primary_signal_to_partner_lead`). Must be unique within a section. |
| label        | no                                | defaults to sentence-cased version of `id`, e.g., _Primary signal to partner lead_) | field label for use in forms and other displays                                                      |
| type         | no                                | text                                                                                | the type of field, used to create the appropriate form input and/or interpret content                |
| required     | no                                | false                                                                               | if an entry in this field is required in order for the file to be valid                              |
| options      | only for radio and multi_checkbox |                                                                                     | option must include `value` in snake case; see below                                                 |
| default_type | no                                |                                                                                     | only for groupings of fields; specifies the default field type for the nested fields                 |
| alert_if     | no                                |                                                                                     | only for character_select fields, specifies values that must be alerted                              |
| announce_if  | no                                |                                                                                     | only for character_select fields, specifies values that must be announced                            |

##### Field types

Note: null is permitted when a field is not required.

| type             | definition                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text             | a string of text, limited to 255 characters                                                                                                            |
| textarea         | extended text, (limit?) (allow html?)                                                                                                                  |
| checkbox         | permits a binary choice (true/false)                                                                                                                   |
| multi_checkbox   | permits selecting one of more of provided options                                                                                                      |
| radio            | permits selecting only one of provided options                                                                                                         |
| character_select | permits selecting a single character from the last set of character in the field id, e.g. the id `lead_vs_nt_AKJx` would permit selecting A, K, J or x |
| grouping | permits defining a nested set of fields. Cannot nest more than one level. |

##### Option attributes

Options are provided to radio and multi_checkbox fields

| attribute | required | default                                   | definition                                                                   |
| --------- | -------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| value     | yes      |                                           | the value to be stored                                                       |
| label     | no       | sentence-cased version of value           | the label to be present in forms, or the value to be displayed when selected |
| alert     | no       |                                           | alert text to be displayed with option                                       |
| announce  | no       |  | announce text to be displayed with option |

## System Notes Format

A system notes file will reference the card structure to be used to define its fields. Although the card structure can have nested fields, the system notes file does not. Because field names are unique within each section, the nesting is not required to interpret the card.

In addition to the field values delineated by the card structure, any section with a `conventions` field will permit the player to define a list of conventions applicable to that section.

At a minimum, a system notes file would be:

    format: <format name>
    version: <version number>
    sections:
      general:
        fields:
          title: <text>

## Convention Format

A convention must have a title. Beyond that, additional description may be provided, along with a series of bidding sequences that apply to the convention.

##### Convention Format

| attribute            | required | definition                                                                               |
| -------------------- | -------- | ---------------------------------------------------------------------------------------- |
| title                | yes      | the name of the convention                                                               |
| description          | no       | description of convention, up to 255 characters                                          |
| extended_description | no       | extended text, (limit?) (allow html?) (will not be included when cloned)                 |
| author_link          | no       | link to original author's website (will not be modified when cloned)                     |
| convention_link      | no       | link to original authors's web page on the convention (will not be modified when cloned) |
| sequences            | no       | array of bidding sequences                                                               |

##### Bidding sequence format

| attribute | required | definition                                     | permitted values                                                   |
| --------- | -------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| bids      | yes      | the sequence of bids                           | see below                                                          |
| hcp       | no       | HCP range, can omit either min or max          | {min: 0-40, max: 0-40}                                             |
| shape     | no       | description of shape                           | text, up to 30 characters, e.g., '<3 card support '                |
| announce  | no       | if announceable, the text of the announcement  | text, up to 40 characters, e.g., 'transfer to hearts'              |
| alert     | no       | if alertable, the text of the alert            | text, up to 40 characters, e.g., 'Jacoby 2NT, 4+ support, 13+ HCP' |
| vuln      | no       | restricts sequence to vulnerability conditions | `none`, `we`, `they`, `both`                                       |
| forcing   | no       | if bid is forcing                              | `one round`, `to_game`                                             |
| detail    | no       | additional description                         | text, up to 255 characters                                         |

##### Bids format

Bid values are provided as a single string, which is not case sensitive. A limited set of characters have meaning. Other characters (such as spaces or dashes) may be included for legibility when editing, but are not displayed.

| character | meaning                                                |
| --------- | ------------------------------------------------------ |
| `.` or `p`| pass                                                   |
| [1-7]     | level, must always be followed by a suit specification |
| `m`       | minor suit, must be preceded by level                  |
| `c`       | club, must be preceded by level                        |
| `d`       | diamond, must be preceded by level                     |
| `j`       | major suit, must be preceded by level                  |
| `h`       | heart, must be preceded by level                       |
| `s`       | spade, must be preceded by level                       |
| `n`       | no trump, must be preceded by level                    |
| `u`       | unbid suit, must be preceded by level                  |
| `x`       | double                                                 |
| `r`       | redouble                                               |
| `q`       | cue bid                                                |
| '#'       | any non-pass bid                                       |
| '<'       | used at beginning of sequence to indicate 1 or more undetermined bids preceded this sequence | 

Examples:

| bid string | interpretation       |
| ---------- | -------------------- |
| `1c.1h.1n` | 1C - P - 1H - P - 1N |
| `1c 1h x`  | 1C - 1H - x          |

This string can be parsed into an array of bids using regex. The last bid is always assumed to be made by the partnership. Therefore, if an odd number of bids is provided, the first bid was made by We. If an even number of bids is provided, the first bid was made by They.
