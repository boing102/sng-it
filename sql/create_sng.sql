--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE cards (
    id integer NOT NULL
);


--
-- Name: game; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE game (
    id integer NOT NULL,
    ended boolean,
    hint text,
    picked_card integer,
    picked_by_others json
);


--
-- Name: game_player_card; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE game_player_card (
    gameid integer NOT NULL,
    cardid integer NOT NULL,
    playerid integer NOT NULL
);


--
-- Name: player; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE player (
    id integer NOT NULL,
    name text,
    password text
);


--
-- Name: result; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE result (
    gameid integer NOT NULL,
    playerid integer NOT NULL,
    picked_card integer NOT NULL,
    good boolean
);


--
-- Name: turn; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE turn (
    gameid integer NOT NULL,
    playerid integer NOT NULL,
    state integer NOT NULL
);


--
-- Name: cardid; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cardid PRIMARY KEY (id);


--
-- Name: gameid; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY game
    ADD CONSTRAINT gameid PRIMARY KEY (id);


--
-- Name: gameplayercard; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY game_player_card
    ADD CONSTRAINT gameplayercard PRIMARY KEY (gameid, cardid, playerid);


--
-- Name: playerprimary; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY player
    ADD CONSTRAINT playerprimary PRIMARY KEY (id);


--
-- Name: resultid; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY result
    ADD CONSTRAINT resultid PRIMARY KEY (gameid, playerid, picked_card);


--
-- Name: turn_pkey; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY turn
    ADD CONSTRAINT turn_pkey PRIMARY KEY (gameid, playerid, state);


--
-- Name: card_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY game_player_card
    ADD CONSTRAINT card_id FOREIGN KEY (cardid) REFERENCES cards(id);


--
-- Name: cardid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY result
    ADD CONSTRAINT cardid FOREIGN KEY (picked_card) REFERENCES cards(id);


--
-- Name: game_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY game_player_card
    ADD CONSTRAINT game_id FOREIGN KEY (gameid) REFERENCES game(id);


--
-- Name: gameid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY turn
    ADD CONSTRAINT gameid FOREIGN KEY (gameid) REFERENCES game(id);


--
-- Name: gameid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY result
    ADD CONSTRAINT gameid FOREIGN KEY (gameid) REFERENCES game(id);


--
-- Name: player_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY game_player_card
    ADD CONSTRAINT player_id FOREIGN KEY (playerid) REFERENCES player(id);


--
-- Name: playerid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY turn
    ADD CONSTRAINT playerid FOREIGN KEY (playerid) REFERENCES player(id);


--
-- Name: playerid; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY result
    ADD CONSTRAINT playerid FOREIGN KEY (playerid) REFERENCES player(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: -
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

