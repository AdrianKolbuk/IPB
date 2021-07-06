-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2021-06-10 16:27:42.037

-- tables
-- Table: Dokumentacja
CREATE TABLE Dokumentacja (
    id int  NOT NULL,
    dataUtworzenia date  NOT NULL,
    nakład int  NOT NULL,
    formaNadruku varchar(64)  NOT NULL,
    rodzajMateriału varchar(64)  NOT NULL,
    tematPrzewodni varchar(64)  NOT NULL,
    stanProjektu varchar(64)  NOT NULL,
    DziałProjektowy_id int  NOT NULL,
    Projektant_id int  NOT NULL,
    CONSTRAINT Dokumentacja_pk PRIMARY KEY  (id)
);

-- Table: DziałProjektowy
CREATE TABLE DziałProjektowy (
    id int  NOT NULL,
    email varchar(64)  NOT NULL,
    CONSTRAINT DziałProjektowy_pk PRIMARY KEY  (id)
);

-- Table: Kolekcja grafik
CREATE TABLE KolekcjaGrafik (
    id int  NOT NULL,
    dataUtworzenia date  NOT NULL,
    odnośnik varchar(256)  NOT NULL,
    Projektant_id int  NOT NULL,
    CONSTRAINT KolekcjaGrafik_pk PRIMARY KEY  (id)
);

-- Table: Projektant
CREATE TABLE Projektant (
    id int  NOT NULL,
    imię varchar(64)  NOT NULL,
    nazwisko varchar(64)  NOT NULL,
    email varchar(64)  NOT NULL,
    CONSTRAINT Projektant_pk PRIMARY KEY  (id)
);

-- Table: Zlecenie
CREATE TABLE Zlecenie (
    id int  NOT NULL,
    treść varchar(256)  NOT NULL,
    DziałProjektowy_id int  NOT NULL,
    CONSTRAINT Zlecenie_pk PRIMARY KEY  (id)
);

-- foreign keys
-- Reference: Dokumentacja_DziałProjektowy (table: Dokumentacja)
ALTER TABLE Dokumentacja ADD CONSTRAINT Dokumentacja_DziałProjektowy
    FOREIGN KEY (DziałProjektowy_id)
    REFERENCES DziałProjektowy (id);

-- Reference: Dokumentacja_Projektant (table: Dokumentacja)
ALTER TABLE Dokumentacja ADD CONSTRAINT Dokumentacja_Projektant
    FOREIGN KEY (Projektant_id)
    REFERENCES Projektant (id);

-- Reference: Kolekcja grafik_Projektant (table: Kolekcja grafik)
ALTER TABLE KolekcjaGrafik ADD CONSTRAINT KolekcjaGrafik_Projektant
    FOREIGN KEY (Projektant_id)
    REFERENCES Projektant (id);

-- Reference: Zlecenie_DziałProjektowy (table: Zlecenie)
ALTER TABLE Zlecenie ADD CONSTRAINT Zlecenie_DziałProjektowy
    FOREIGN KEY (DziałProjektowy_id)
    REFERENCES DziałProjektowy (id);

-- End of file.