package sk.eea.sngit.rest.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author mme
 */
@Entity
@Table(name = "card")
public class Card {
    
    @Id
    private long id;
    
    private String nazov;
    
    private String autorita;
    
    private String datovanie;
    
    private String technika;
    
    private String material;
    
    private String pid;
    
    private String datovaniePopis;
    
    private String zasadanieKomisie;
    
    private String integrita;
    
    private String integritaNazovCelku;
    
    private String integritaPoradoveCislo;
    
    private String inventarneCislo;
    
    private String komisia;
    
    private String kurator;
    
    private String miery;
    
    private String nadobudnute;
    
    private String nazovVsetky;
    
    private String organizacia;
    
    private String poznamka;
    
    private String prirastkoveCislo;
    
    private String sposobNadobudnutia;
    
    private String stupenPovodnosti;
    
    private String stupenSpracovania;
    
    private String vlastnik;
    
    private String vytvarnyDruh;
    
    private String znacenie;
    
    private String zaner;    
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return nazov;
    }

    public void setTitle(String title) {
        this.nazov = title;
    }

    public String getCreator() {
        return autorita;
    }

    public void setCreator(String creator) {
        this.autorita = creator;
    }

    public String getCreated() {
        return datovanie;
    }

    public void setCreated(String created) {
        this.datovanie = created;
    }

    public String getFormat() {
        return material;
    }

    public void setFormat(String format) {
        this.material = format;
    }

    public String getUrl() {
        return pid;
    }

    public void setUrl(String url) {
        this.pid = url;
    }

    public String getNazov() {
        return nazov;
    }

    public void setNazov(String nazov) {
        this.nazov = nazov;
    }

    public String getAutorita() {
        return autorita;
    }

    public void setAutorita(String autorita) {
        this.autorita = autorita;
    }

    public String getDatovanie() {
        return datovanie;
    }

    public void setDatovanie(String datovanie) {
        this.datovanie = datovanie;
    }

    public String getTechnika() {
        return technika;
    }

    public void setTechnika(String technika) {
        this.technika = technika;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getDatovaniePopis() {
        return datovaniePopis;
    }

    public void setDatovaniePopis(String datovaniePopis) {
        this.datovaniePopis = datovaniePopis;
    }

    public String getZasadanieKomisie() {
        return zasadanieKomisie;
    }

    public void setZasadanieKomisie(String zasadanieKomisie) {
        this.zasadanieKomisie = zasadanieKomisie;
    }

    public String getIntegrita() {
        return integrita;
    }

    public void setIntegrita(String integrita) {
        this.integrita = integrita;
    }

    public String getIntegritaNazovCelku() {
        return integritaNazovCelku;
    }

    public void setIntegritaNazovCelku(String integritaNazovCelku) {
        this.integritaNazovCelku = integritaNazovCelku;
    }

    public String getIntegritaPoradoveCislo() {
        return integritaPoradoveCislo;
    }

    public void setIntegritaPoradoveCislo(String integritaPoradoveCislo) {
        this.integritaPoradoveCislo = integritaPoradoveCislo;
    }

    public String getInventarneCislo() {
        return inventarneCislo;
    }

    public void setInventarneCislo(String inventarneCislo) {
        this.inventarneCislo = inventarneCislo;
    }

    public String getKomisia() {
        return komisia;
    }

    public void setKomisia(String komisia) {
        this.komisia = komisia;
    }

    public String getKurator() {
        return kurator;
    }

    public void setKurator(String kurator) {
        this.kurator = kurator;
    }

    public String getMiery() {
        return miery;
    }

    public void setMiery(String miery) {
        this.miery = miery;
    }

    public String getNadobudnute() {
        return nadobudnute;
    }

    public void setNadobudnute(String nadobudnute) {
        this.nadobudnute = nadobudnute;
    }

    public String getNazovVsetky() {
        return nazovVsetky;
    }

    public void setNazovVsetky(String nazovVsetky) {
        this.nazovVsetky = nazovVsetky;
    }

    public String getOrganizacia() {
        return organizacia;
    }

    public void setOrganizacia(String organizacia) {
        this.organizacia = organizacia;
    }

    public String getPoznamka() {
        return poznamka;
    }

    public void setPoznamka(String poznamka) {
        this.poznamka = poznamka;
    }

    public String getPrirastkoveCislo() {
        return prirastkoveCislo;
    }

    public void setPrirastkoveCislo(String prirastkoveCislo) {
        this.prirastkoveCislo = prirastkoveCislo;
    }

    public String getSposobNadobudnutia() {
        return sposobNadobudnutia;
    }

    public void setSposobNadobudnutia(String sposobNadobudnutia) {
        this.sposobNadobudnutia = sposobNadobudnutia;
    }

    public String getStupenPovodnosti() {
        return stupenPovodnosti;
    }

    public void setStupenPovodnosti(String stupenPovodnosti) {
        this.stupenPovodnosti = stupenPovodnosti;
    }

    public String getStupenSpracovania() {
        return stupenSpracovania;
    }

    public void setStupenSpracovania(String stupenSpracovania) {
        this.stupenSpracovania = stupenSpracovania;
    }

    public String getVlastnik() {
        return vlastnik;
    }

    public void setVlastnik(String vlastnik) {
        this.vlastnik = vlastnik;
    }

    public String getVytvarnyDruh() {
        return vytvarnyDruh;
    }

    public void setVytvarnyDruh(String vytvarnyDruh) {
        this.vytvarnyDruh = vytvarnyDruh;
    }

    public String getZnacenie() {
        return znacenie;
    }

    public void setZnacenie(String znacenie) {
        this.znacenie = znacenie;
    }

    public String getZaner() {
        return zaner;
    }

    public void setZaner(String zaner) {
        this.zaner = zaner;
    }
    
    
}
