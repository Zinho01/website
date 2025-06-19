## 🧾 User Story: Verstuur een contactbericht via WhatsApp

**Als een** bezoeker van de website  
**wil ik** een contactformulier kunnen invullen en mijn bericht via WhatsApp kunnen verzenden  
**zodat** ik op een snelle en directe manier contact kan opnemen met de zaak.

---

### ✅ Acceptatiecriteria

1. Het formulier bevat de velden:
   - Naam
   - E-mailadres
   - Bericht

2. Na het klikken op de knop **"Verstuur via WhatsApp"**:
   - Wordt er een WhatsApp-link gegenereerd met de ingevulde gegevens.
   - Wordt deze link geopend in een nieuw browser-tabblad (desktop of mobiel, afhankelijk van het apparaat).
   - Wordt er een alert getoond met de boodschap:  
     _"Bedankt voor het versturen van uw bericht! We nemen zo spoedig mogelijk contact met u op via WhatsApp."_
   - Wordt het formulier geleegd.

3. De applicatie gebruikt:
   - `navigator.userAgent` om mobiel of desktop te detecteren.
   - `window.open()` om WhatsApp Web of mobiele WhatsApp te openen.
   - **Geen backend of externe API** — alles gebeurt aan de frontend.