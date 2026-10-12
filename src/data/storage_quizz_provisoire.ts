export const questions =  [
    {
      "id": "NET001",
      "title": "Combien de couches comporte le modèle OSI ?",
      "options": [
        {"id": "A", "text": "4 couches"},
        {"id": "B", "text": "5 couches"},
        {"id": "C", "text": "7 couches"},
        {"id": "D", "text": "8 couches"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Modèle OSI",
      "explanation": "Le modèle OSI comporte sept couches, de la couche physique (1) à la couche application (7)."
    },
    {
      "id": "NET002",
      "title": "Quel équipement permet principalement de relier plusieurs réseaux IP ?",
      "options": [
        {"id": "A", "text": "Un commutateur de couche 2"},
        {"id": "B", "text": "Un routeur"},
        {"id": "C", "text": "Un clavier"},
        {"id": "D", "text": "Un répéteur USB"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Équipements réseau",
      "explanation": "Un routeur opère à la couche réseau (couche 3) et achemine les paquets IP entre différents réseaux."
    },
    {
      "id": "NET003",
      "title": "Quel protocole attribue automatiquement des paramètres IP aux appareils d'un réseau ?",
      "options": [
        {"id": "A", "text": "FTP"},
        {"id": "B", "text": "SMTP"},
        {"id": "C", "text": "DHCP"},
        {"id": "D", "text": "SSH"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Protocoles réseau",
      "explanation": "Le protocole DHCP (Dynamic Host Configuration Protocol) attribue automatiquement une adresse IP et d'autres paramètres réseau."
    },
    {
      "id": "NET004",
      "title": "Quel protocole permet généralement de traduire un nom de domaine en adresse IP ?",
      "options": [
        {"id": "A", "text": "DNS"},
        {"id": "B", "text": "DHCP"},
        {"id": "C", "text": "ARP"},
        {"id": "D", "text": "SSH"}
      ],
      "correctAnswerId": "A",
      "level": "facile",
      "category": "Services réseau",
      "explanation": "Le protocole DNS (Domain Name System) permet notamment de rechercher les adresses IP associées aux noms de domaine."
    },
    {
      "id": "NET005",
      "title": "À quelle couche du modèle OSI associe-t-on principalement le protocole IP ?",
      "options": [
        {"id": "A", "text": "Couche physique"},
        {"id": "B", "text": "Couche transport"},
        {"id": "C", "text": "Couche réseau"},
        {"id": "D", "text": "Couche session"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Modèle OSI",
      "explanation": "Le protocole IP assure l'adressage logique et l'acheminement des paquets au niveau de la couche 3 (réseau)."
    },
    {
      "id": "NET006",
      "title": "Quelle adresse identifie une interface réseau au niveau de la liaison dans un réseau Ethernet ?",
      "options": [
        {"id": "A", "text": "Une adresse URL"},
        {"id": "B", "text": "Une adresse MAC"},
        {"id": "C", "text": "Un nom de domaine"},
        {"id": "D", "text": "Une adresse e-mail"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Adressage réseau",
      "explanation": "Une adresse MAC (Media Access Control) identifie de manière unique une interface au niveau de la couche liaison (couche 2)."
    },
    {
      "id": "NET007",
      "title": "Quel protocole est couramment utilisé pour consulter des pages Web de manière sécurisée ?",
      "options": [
        {"id": "A", "text": "Telnet"},
        {"id": "B", "text": "FTP"},
        {"id": "C", "text": "HTTPS"},
        {"id": "D", "text": "DHCP"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Protocoles Web",
      "explanation": "HTTPS (HTTP Secure) utilise TLS pour chiffrer et protéger les échanges HTTP."
    },
    {
      "id": "NET008",
      "title": "Quel protocole est utilisé par la commande ping pour envoyer des messages de diagnostic ?",
      "options": [
        {"id": "A", "text": "ICMP"},
        {"id": "B", "text": "SMTP"},
        {"id": "C", "text": "POP3"},
        {"id": "D", "text": "IMAP"}
      ],
      "correctAnswerId": "A",
      "level": "facile",
      "category": "Diagnostic réseau",
      "explanation": "La commande ping utilise les messages ICMP (Internet Control Message Protocol), notamment Echo Request et Echo Reply."
    },
    {
      "id": "NET009",
      "title": "Quel équipement connecte plusieurs appareils au sein d'un réseau local Ethernet ?",
      "options": [
        {"id": "A", "text": "Un commutateur (switch)"},
        {"id": "B", "text": "Un scanner"},
        {"id": "C", "text": "Un écran"},
        {"id": "D", "text": "Un microphone"}
      ],
      "correctAnswerId": "A",
      "level": "facile",
      "category": "Équipements réseau",
      "explanation": "Un commutateur (switch) Ethernet transmet les trames vers les ports appropriés en fonction des adresses MAC de destination."
    },
    {
      "id": "NET010",
      "title": "Quelle est la taille d'une adresse IPv4 ?",
      "options": [
        {"id": "A", "text": "16 bits"},
        {"id": "B", "text": "32 bits"},
        {"id": "C", "text": "64 bits"},
        {"id": "D", "text": "128 bits"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Adressage réseau",
      "explanation": "Une adresse IPv4 comporte 32 bits, représentés généralement sous forme de quatre nombres décimaux (octets) séparés par des points."
    },
    {
      "id": "NET031",
      "title": "Quel câble réseau utilise des connecteurs de type RJ-45 ?",
      "options": [
        {"id": "A", "text": "Le câble coaxial"},
        {"id": "B", "text": "La paire torsadée (Ethernet)"},
        {"id": "C", "text": "La fibre optique monomode"},
        {"id": "D", "text": "Le câble série RS-232"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Câblage réseau",
      "explanation": "Les câbles à paires torsadées Ethernet utilisent des connecteurs RJ-45 pour relier les cartes réseau et les switchs."
    },
    {
      "id": "NET032",
      "title": "Quel type de fibre optique utilise un cœur très fin et ne permet qu'un seul mode de propagation de la lumière sur de très longues distances ?",
      "options": [
        {"id": "A", "text": "La fibre multimode à saut d'indice"},
        {"id": "B", "text": "La fibre monomode"},
        {"id": "C", "text": "La fibre plastique standard"},
        {"id": "D", "text": "La fibre multimode à gradient d'indice"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Câblage réseau",
      "explanation": "La fibre monomode possède un diamètre de cœur réduit, permettant au signal lumineux de voyager sans réflexions multiples sur de grandes distances."
    },
    {
      "id": "NET033",
      "title": "Quel protocole de messagerie est principalement utilisé pour envoyer du courrier électronique d'un client vers un serveur ou entre serveurs ?",
      "options": [
        {"id": "A", "text": "POP3"},
        {"id": "B", "text": "IMAP"},
        {"id": "C", "text": "SMTP"},
        {"id": "D", "text": "FTP"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Protocoles de messagerie",
      "explanation": "Le protocole SMTP (Simple Mail Transfer Protocol) est le standard mondial pour l'acheminement et l'envoi des courriers électroniques."
    },
    {
      "id": "NET034",
      "title": "Quel protocole permet de récupérer ses e-mails depuis un serveur distant tout en laissant généralement les messages sur le serveur pour une synchronisation multi-appareils ?",
      "options": [
        {"id": "A", "text": "SMTP"},
        {"id": "B", "text": "IMAP"},
        {"id": "C", "text": "HTTP"},
        {"id": "D", "text": "Telnet"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Protocoles de messagerie",
      "explanation": "IMAP (Internet Message Access Protocol) gère la synchronisation des messages directement sur le serveur, contrairement à POP3 qui a tendance à les télécharger et les supprimer."
    },
    {
      "id": "NET035",
      "title": "Quelle technologie sans fil locale est normalisée sous l'appellation IEEE 802.11 ?",
      "options": [
        {"id": "A", "text": "Le Bluetooth"},
        {"id": "B", "text": "Le Wi-Fi"},
        {"id": "C", "text": "Le ZigBee"},
        {"id": "D", "text": "La NFC"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Réseaux sans fil",
      "explanation": "La famille de normes IEEE 802.11 définit l'ensemble des technologies de réseaux locaux sans fil plus communément appelées Wi-Fi."
    },
    {
      "id": "NET036",
      "title": "Quel est le nom de la sous-couche du modèle OSI responsable du contrôle d'accès au support physique (Media Access Control) ?",
      "options": [
        {"id": "A", "text": "LLC (Logical Link Control)"},
        {"id": "B", "text": "MAC (Medium Access Control)"},
        {"id": "C", "text": "TCP"},
        {"id": "D", "text": "IP"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Modèle OSI",
      "explanation": "La sous-couche MAC fait partie de la couche liaison de données (couche 2) et gère la manière dont les nœuds accèdent au support partagé."
    },
    {
      "id": "NET037",
      "title": "Quel équipement réseau basique se contente de régénérer et diffuser un signal sur tous ses ports sans intelligence de filtrage ?",
      "options": [
        {"id": "A", "text": "Un concentrateur (hub)"},
        {"id": "B", "text": "Un commutateur (switch)"},
        {"id": "C", "text": "Un routeur"},
        {"id": "D", "text": "Une passerelle applicative"}
      ],
      "correctAnswerId": "A",
      "level": "facile",
      "category": "Équipements réseau",
      "explanation": "Un hub (concentrateur) de couche 1 répète simplement les signaux électriques entrants sur tous ses autres ports sans examiner les trames."
    },
    {
      "id": "NET038",
      "title": "Quel type d'adresse IP est configuré manuellement par un administrateur sur une machine ?",
      "options": [
        {"id": "A", "text": "Une adresse dynamique"},
        {"id": "B", "text": "Une adresse statique"},
        {"id": "C", "text": "Une adresse apipa"},
        {"id": "D", "text": "Une adresse multicast"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Adressage réseau",
      "explanation": "Une adresse statique est fixée durablement dans la configuration réseau de l'hôte, contrairement à une attribution automatique par DHCP."
    },
    {
      "id": "NET039",
      "title": "Quel protocole de transfert de fichiers non sécurisé utilise traditionnellement le port TCP 21 pour ses commandes ?",
      "options": [
        {"id": "A", "text": "SFTP"},
        {"id": "B", "text": "FTP"},
        {"id": "C", "text": "TFTP"},
        {"id": "D", "text": "HTTP"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Protocoles réseau",
      "explanation": "Le protocole FTP (File Transfer Protocol) utilise par défaut le port 21 pour le canal de contrôle et le port 20 pour les données."
    },
    {
      "id": "NET040",
      "title": "Quelle commande réseau sous Windows et Linux permet d'afficher la configuration IP de la machine locale ?",
      "options": [
        {"id": "A", "text": "ping"},
        {"id": "B", "text": "traceroute"},
        {"id": "C", "text": "ipconfig (ou ifconfig/ip)"},
        {"id": "D", "text": "netstat"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Diagnostic réseau",
      "explanation": "La commande ipconfig (sous Windows) ou ifconfig/ip (sous Linux/Unix) permet d'inspecter les interfaces et adresses IP locales."
    },
    {
      "id": "NET041",
      "title": "Quel est le nom de la plage d'adresses IPv4 réservée aux tests locaux d'une machine (boucle locale ou localhost) ?",
      "options": [
        {"id": "A", "text": "10.0.0.0/8"},
        {"id": "B", "text": "192.168.0.0/16"},
        {"id": "C", "text": "127.0.0.0/8"},
        {"id": "D", "text": "172.16.0.0/12"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Adressage IPv4",
      "explanation": "Le bloc 127.0.0.0/8 (dont l'adresse la plus célèbre est 127.0.0.1) est réservé au trafic de bouclage interne (loopback)."
    },
    {
      "id": "NET042",
      "title": "Quel protocole sans fil à courte portée est couramment utilisé pour connecter des accessoires comme des casques ou des souris à un ordinateur ?",
      "options": [
        {"id": "A", "text": "Le Wi-Fi Direct"},
        {"id": "B", "text": "Le Bluetooth"},
        {"id": "C", "text": "Le LTE"},
        {"id": "D", "text": "Le LoraWAN"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Réseaux sans fil",
      "explanation": "Le Bluetooth est une technologie de communication sans fil de courte portée dédiée aux PAN (Personal Area Networks)."
    },
    {
      "id": "NET043",
      "title": "Quelle couche du modèle OSI s'occupe du formatage des données, du chiffrement et de la compression (ex: SSL/TLS, JPEG, ASCII) ?",
      "options": [
        {"id": "A", "text": "Couche Physique"},
        {"id": "B", "text": "Couche Liaison"},
        {"id": "C", "text": "Couche Présentation"},
        {"id": "D", "text": "Couche Réseau"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Modèle OSI",
      "explanation": "La couche 6 (Présentation) garantit que les données envoyées par l'application d'un système sont lisibles par l'application d'un autre système."
    },
    {
      "id": "NET044",
      "title": "Quel terme désigne un réseau informatique qui couvre une zone géographique limitée, comme une maison ou un bureau ?",
      "options": [
        {"id": "A", "text": "WAN"},
        {"id": "B", "text": "MAN"},
        {"id": "C", "text": "LAN"},
        {"id": "D", "text": "GAN"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Topologies réseau",
      "explanation": "LAN signifie Local Area Network, décrivant un réseau informatique restreint à un bâtiment ou un site géographique restreint."
    },
    {
      "id": "NET045",
      "title": "Quel protocole de couche transport non orienté connexion est souvent utilisé pour le streaming vidéo ou les jeux en temps réel ?",
      "options": [
        {"id": "A", "text": "TCP"},
        {"id": "B", "text": "UDP"},
        {"id": "C", "text": "HTTP"},
        {"id": "D", "text": "FTP"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "TCP et UDP",
      "explanation": "UDP privilégie la vitesse et la légèreté au détriment de la fiabilité, ce qui convient parfaitement au trafic temps réel."
    },
    {
      "id": "NET046",
      "title": "Quel dispositif de sécurité matériel ou logiciel filtre le trafic réseau entrant et sortant selon des règles prédéfinies ?",
      "options": [
        {"id": "A", "text": "Un pare-feu (firewall)"},
        {"id": "B", "text": "Un concentrateur"},
        {"id": "C", "text": "Une imprimante réseau"},
        {"id": "D", "text": "Un onduleur"}
      ],
      "correctAnswerId": "A",
      "level": "facile",
      "category": "Sécurité réseau",
      "explanation": "Le pare-feu analyse les paquets et applique des politiques de sécurité pour autoriser ou bloquer les flux réseau."
    },
    {
      "id": "NET047",
      "title": "Quel connecteur est généralement vissé ou clipsé sur les câbles coaxiaux pour la télévision ou les anciennes installations réseaux Ethernet 10Base2 ?",
      "options": [
        {"id": "A", "text": "Le connecteur RJ-45"},
        {"id": "B", "text": "Le connecteur BNC"},
        {"id": "C", "text": "Le connecteur SC"},
        {"id": "D", "text": "Le connecteur Molex"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Câblage réseau",
      "explanation": "Le connecteur BNC (Bayonet Neill–Concelman) est le raccord standard utilisé historiquement avec les câbles coaxiaux."
    },
    {
      "id": "NET048",
      "title": "Quelle est l'unité de données manipulée au niveau de la couche transport (notamment pour TCP) ?",
      "options": [
        {"id": "A", "text": "Un bit"},
        {"id": "B", "text": "Une trame"},
        {"id": "C", "text": "Un paquet / datagramme"},
        {"id": "D", "text": "Un segment"}
      ],
      "correctAnswerId": "D",
      "level": "facile",
      "category": "Modèle OSI",
      "explanation": "On parle de 'segment' pour TCP (et de 'datagramme' pour UDP) au niveau de la couche transport du modèle OSI."
    },
    {
      "id": "NET049",
      "title": "Quel protocole simple d'accès à distance textuel non sécurisé utilise par défaut le port TCP 23 ?",
      "options": [
        {"id": "A", "text": "SSH"},
        {"id": "B", "text": "Telnet"},
        {"id": "C", "text": "RDP"},
        {"id": "D", "text": "VNC"}
      ],
      "correctAnswerId": "B",
      "level": "facile",
      "category": "Protocoles réseau",
      "explanation": "Telnet permet de se connecter à distance à une machine, mais transmet toutes les informations (y compris les mots de passe) en clair."
    },
    {
      "id": "NET050",
      "title": "Quel terme qualifie un réseau informatique couvrant une vaste zone géographique, comme un pays ou la planète entière ?",
      "options": [
        {"id": "A", "text": "LAN"},
        {"id": "B", "text": "PAN"},
        {"id": "C", "text": "WAN"},
        {"id": "D", "text": "CAN"}
      ],
      "correctAnswerId": "C",
      "level": "facile",
      "category": "Topologies réseau",
      "explanation": "WAN signifie Wide Area Network, désignant les réseaux étendus interconnectant des sites distants à l'échelle nationale ou mondiale."
    },
    {
      "id": "NET011",
      "title": "Quel est le rôle principal de TCP ?",
      "options": [
        {"id": "A", "text": "Attribuer des adresses MAC"},
        {"id": "B", "text": "Fournir un transport fiable et ordonné des données"},
        {"id": "C", "text": "Traduire les noms de domaine"},
        {"id": "D", "text": "Sélectionner le canal Wi-Fi"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "TCP et UDP",
      "explanation": "TCP utilise des accusés de réception et un mécanisme de retransmission pour garantir un transport fiable et ordonné."
    },
    {
      "id": "NET012",
      "title": "Quelle est l'adresse réseau de 192.168.1.70/26 ?",
      "options": [
        {"id": "A", "text": "192.168.1.0"},
        {"id": "B", "text": "192.168.1.64"},
        {"id": "C", "text": "192.168.1.70"},
        {"id": "D", "text": "192.168.1.128"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Subnetting",
      "explanation": "Un /26 correspond à des blocs de 64 adresses ($2^{32-26} = 64$). Les blocs vont de 0-63, 64-127, etc. L'adresse 70 appartient donc au sous-réseau débutant à 192.168.1.64."
    },
    {
      "id": "NET013",
      "title": "Combien d'adresses d'hôtes IPv4 utilisables offre un sous-réseau /27 classique ?",
      "options": [
        {"id": "A", "text": "14"},
        {"id": "B", "text": "30"},
        {"id": "C", "text": "32"},
        {"id": "D", "text": "62"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Subnetting",
      "explanation": "Un /27 contient 32 adresses au total ($2^5$). En retirant l'adresse réseau et l'adresse de diffusion, il reste 30 adresses utilisables pour les hôtes."
    },
    {
      "id": "NET014",
      "title": "Quel protocole associe généralement une adresse IPv4 locale à une adresse MAC sur Ethernet ?",
      "options": [
        {"id": "A", "text": "ARP"},
        {"id": "B", "text": "DNS"},
        {"id": "C", "text": "BGP"},
        {"id": "D", "text": "TLS"}
      ],
      "correctAnswerId": "A",
      "level": "moyen",
      "category": "Protocoles réseau",
      "explanation": "Le protocole ARP (Address Resolution Protocol) permet de découvrir l'adresse MAC associée à une adresse IPv4 sur le réseau local."
    },
    {
      "id": "NET015",
      "title": "Quelle différence décrit correctement TCP et UDP ?",
      "options": [
        {"id": "A", "text": "UDP garantit toujours la livraison"},
        {"id": "B", "text": "TCP fournit un transport fiable, contrairement à UDP qui ne garantit pas la livraison"},
        {"id": "C", "text": "TCP fonctionne uniquement en Wi-Fi"},
        {"id": "D", "text": "UDP transporte uniquement du texte"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "TCP et UDP",
      "explanation": "TCP assure un flux orienté connexion et fiable. UDP est un protocole sans connexion qui ne garantit ni la livraison, ni l'ordre des paquets."
    },
    {
      "id": "NET016",
      "title": "À quoi sert principalement la passerelle par défaut d'un ordinateur ?",
      "options": [
        {"id": "A", "text": "À stocker les mots de passe"},
        {"id": "B", "text": "À transmettre le trafic destiné à d'autres réseaux vers un routeur"},
        {"id": "C", "text": "À remplacer l'adresse MAC"},
        {"id": "D", "text": "À chiffrer tous les fichiers"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Routage",
      "explanation": "La passerelle par défaut est l'adresse IP du routeur local qui gère le trafic destiné aux réseaux distants."
    },
    {
      "id": "NET017",
      "title": "Quel port TCP est traditionnellement utilisé par défaut par HTTPS ?",
      "options": [
        {"id": "A", "text": "21"},
        {"id": "B", "text": "25"},
        {"id": "C", "text": "80"},
        {"id": "D", "text": "443"}
      ],
      "correctAnswerId": "D",
      "level": "moyen",
      "category": "Ports réseau",
      "explanation": "Le port TCP 443 est le port historique et standard pour HTTPS (bien qu'HTTP/3 utilise QUIC sur UDP)."
    },
    {
      "id": "NET018",
      "title": "Quel est l'objectif principal d'un VLAN ?",
      "options": [
        {"id": "A", "text": "Augmenter la longueur d'un câble"},
        {"id": "B", "text": "Segmenter logiquement un réseau de couche 2"},
        {"id": "C", "text": "Remplacer le protocole IP"},
        {"id": "D", "text": "Convertir IPv4 en IPv6 automatiquement"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Commutation et VLAN",
      "explanation": "Un VLAN (Virtual LAN) permet de diviser un domaine de diffusion physique en plusieurs domaines de diffusion virtuels distincts au niveau de la couche 2."
    },
    {
      "id": "NET019",
      "title": "Quel masque de sous-réseau correspond au préfixe IPv4 /24 ?",
      "options": [
        {"id": "A", "text": "255.0.0.0"},
        {"id": "B", "text": "255.255.0.0"},
        {"id": "C", "text": "255.255.255.0"},
        {"id": "D", "text": "255.255.255.252"}
      ],
      "correctAnswerId": "C",
      "level": "moyen",
      "category": "Adressage réseau",
      "explanation": "Le préfixe /24 indique que les 24 premiers bits sont à 1, ce qui correspond à 255.255.255.0 en notation décimale pointée."
    },
    {
      "id": "NET020",
      "title": "Quel protocole permet de synchroniser l'horloge des systèmes sur un réseau ?",
      "options": [
        {"id": "A", "text": "NTP"},
        {"id": "B", "text": "SNMP"},
        {"id": "C", "text": "FTP"},
        {"id": "D", "text": "POP3"}
      ],
      "correctAnswerId": "A",
      "level": "moyen",
      "category": "Services réseau",
      "explanation": "NTP (Network Time Protocol) est conçu pour synchroniser précisément les horloges des systèmes informatiques sur un réseau."
    },
    {
      "id": "NET051",
      "title": "Quel champ d'un paquet IPv4 indique le nombre maximal de routeurs (sauts) que le paquet peut traverser avant d'être détruit ?",
      "options": [
        {"id": "A", "text": "Le champ Protocol"},
        {"id": "B", "text": "Le champ Time to Live (TTL)"},
        {"id": "C", "text": "Le champ Header Length"},
        {"id": "D", "text": "Le champ Total Length"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Routage IP",
      "explanation": "Le TTL est décrémenté de 1 à chaque passage par un routeur. S'il atteint 0, le paquet est abandonné pour éviter les boucles infinies."
    },
    {
      "id": "NET052",
      "title": "Quel type d'enregistrement DNS est utilisé pour associer un nom de domaine à une adresse IPv6 (AAAA) ?",
      "options": [
        {"id": "A", "text": "Un enregistrement A"},
        {"id": "B", "text": "Un enregistrement AAAA"},
        {"id": "C", "text": "Un enregistrement MX"},
        {"id": "D", "text": "Un enregistrement CNAME"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "DNS",
      "explanation": "L'enregistrement de type A correspond aux adresses IPv4, tandis que l'enregistrement AAAA correspond aux adresses IPv6."
    },
    {
      "id": "NET053",
      "title": "Combien de bits composent une adresse IPv6 complète ?",
      "options": [
        {"id": "A", "text": "32 bits"},
        {"id": "B", "text": "64 bits"},
        {"id": "C", "text": "128 bits"},
        {"id": "D", "text": "256 bits"}
      ],
      "correctAnswerId": "C",
      "level": "moyen",
      "category": "IPv6",
      "explanation": "Une adresse IPv6 est constituée de 128 bits, généralement écrits sous forme de 8 blocs de 4 caractères hexadécimaux séparés par des deux-points."
    },
    {
      "id": "NET054",
      "title": "Quel est le rôle principal de la commande traceroute (ou tracert) sur un réseau ?",
      "options": [
        {"id": "A", "text": "Mesurer uniquement la vitesse maximale du disque dur"},
        {"id": "B", "text": "Suivre le chemin et mesurer le temps de parcours des paquets à travers les routeurs intermédiaires"},
        {"id": "C", "text": "Modifier l'adresse MAC d'une carte réseau"},
        {"id": "D", "text": "Configurer un serveur DHCP de secours"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Diagnostic réseau",
      "explanation": "Traceroute exploite les variations du TTL pour lister séquentiellement chaque routeur traversé jusqu'à la destination."
    },
    {
      "id": "NET055",
      "title": "Quel protocole sécurisé de gestion et de contrôle à distance d'une machine remplace avantageusement Telnet en chiffrant les échanges ?",
      "options": [
        {"id": "A", "text": "SSH"},
        {"id": "B", "text": "SNMP"},
        {"id": "C", "text": "HTTP"},
        {"id": "D", "text": "FTP"}
      ],
      "correctAnswerId": "A",
      "level": "moyen",
      "category": "Protocoles réseau",
      "explanation": "SSH (Secure Shell) établit un canal entièrement chiffré pour l'exécution de commandes et le transfert de fichiers (via SCP/SFTP)."
    },
    {
      "id": "NET056",
      "title": "Quelle est la plage d'adresses IPv4 définie par l'IETF comme 'privée' pour la classe C (RFC 1918) ?",
      "options": [
        {"id": "A", "text": "10.0.0.0 à 10.255.255.255"},
        {"id": "B", "text": "172.16.0.0 à 172.31.255.255"},
        {"id": "C", "text": "192.168.0.0 à 192.168.255.255"},
        {"id": "D", "text": "169.254.0.0 à 169.254.255.255"}
      ],
      "correctAnswerId": "C",
      "level": "moyen",
      "category": "Adressage IPv4",
      "explanation": "Le bloc 192.168.0.0/16 est réservé aux réseaux privés domestiques ou d'entreprise de type classe C."
    },
    {
      "id": "NET057",
      "title": "Quel mécanisme TCP garantit que l'émetteur n'inonde pas de données un récepteur aux capacités de traitement limitées ?",
      "options": [
        {"id": "A", "text": "Le contrôle de congestion (Congestion Control)"},
        {"id": "B", "text": "Le contrôle de flux par fenêtre glissante (Flow Control)"},
        {"id": "C", "text": "Le masquage de sous-réseau"},
        {"id": "D", "text": "L'encapsulation MAC"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "TCP et UDP",
      "explanation": "Le contrôle de flux utilise la taille de la fenêtre (window size) annoncée par le récepteur pour réguler le débit d'envoi."
    },
    {
      "id": "NET058",
      "title": "Qu'appelle-t-on une attaque de type 'ARP Spoofing' (ou ARP Poisoning) ?",
      "options": [
        {"id": "A", "text": "Une saturation du serveur DNS par de fausses requêtes"},
        {"id": "B", "text": "L'envoi de fausses réponses ARP pour associer l'IP d'une victime à la MAC du pirate"},
        {"id": "C", "text": "Une coupure physique des câbles à paires torsadées"},
        {"id": "D", "text": "Un vol de mots de passe par force brute sur le port SSH"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Sécurité réseau",
      "explanation": "L'empoisonnement ARP permet à un attaquant de détourner le trafic du réseau local en usurpant l'identité d'une passerelle ou d'un hôte."
    },
    {
      "id": "NET059",
      "title": "Quel protocole de couche liaison utilise la méthode d'accès CSMA/CD (Carrier Sense Multiple Access with Collision Detection) ?",
      "options": [
        {"id": "A", "text": "Le Token Ring"},
        {"id": "B", "text": "L'Ethernet traditionnel / partagé"},
        {"id": "C", "text": "Le protocole PPP"},
        {"id": "D", "text": "Le protocole BGP"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Commutation",
      "explanation": "CSMA/CD gère l'écoute du support et la détection des collisions sur les réseaux Ethernet historiques (semi-duplex)."
    },
    {
      "id": "NET060",
      "title": "Quel type d'enregistrement DNS permet de rediriger un alias vers un autre nom de domaine canonique (FQDN) ?",
      "options": [
        {"id": "A", "text": "Un enregistrement A"},
        {"id": "B", "text": "Un enregistrement CNAME"},
        {"id": "C", "text": "Un enregistrement TXT"},
        {"id": "D", "text": "Un enregistrement PTR"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "DNS",
      "explanation": "L'enregistrement CNAME (Canonical Name) crée un alias pointant vers un autre nom de domaine de référence."
    },
    {
      "id": "NET061",
      "title": "Quel port UDP est utilisé par défaut par le service DNS pour les requêtes et réponses standard ?",
      "options": [
        {"id": "A", "text": "Le port 21"},
        {"id": "B", "text": "Le port 53"},
        {"id": "C", "text": "Le port 80"},
        {"id": "D", "text": "Le port 123"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Ports réseau",
      "explanation": "Le port 53 (TCP/UDP) est attribué au service de noms de domaine (DNS)."
    },
    {
      "id": "NET062",
      "title": "Quel est l'objectif d'une DMZ (Zone Démilitarisée) dans une architecture réseau d'entreprise ?",
      "options": [
        {"id": "A", "text": "Isoler complètement les postes de travail sans accès Internet"},
        {"id": "B", "text": "Placer les serveurs accessibles depuis l'extérieur (web, mail) dans un sous-réseau intermédiaire sécurisé"},
        {"id": "C", "text": "Augmenter la vitesse de transmission de la fibre optique"},
        {"id": "D", "text": "Remplacer l'adressage IP par des adresses MAC"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Sécurité réseau",
      "explanation": "La DMZ protège le réseau interne de l'entreprise en plaçant les services publics dans une zone tampon isolée par des pare-feux."
    },
    {
      "id": "NET063",
      "title": "Qu'est-ce qu'une trame 'Jumbo' dans les réseaux Ethernet ? ",
      "options": [
        {"id": "A", "text": "Une trame corrompue rejetée par le switch"},
        {"id": "B", "text": "Une trame Ethernet dont la charge utile dépasse la taille standard de 1500 octets (souvent jusqu'à 9000 octets)"},
        {"id": "C", "text": "Une trame de diffusion envoyée à tous les routeurs du monde"},
        {"id": "D", "text": "Un paquet IPv6 encapsulé dans du Token Ring"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Commutation",
      "explanation": "Les trames Jumbo permettent d'améliorer les performances des réseaux locaux rapides (gigabit et plus) en réduisant le nombre de paquets à traiter."
    },
    {
      "id": "NET064",
      "title": "Quel protocole de couche transport est qualifié de 'sans connexion' (connectionless) ?",
      "options": [
        {"id": "A", "text": "TCP"},
        {"id": "B", "text": "UDP"},
        {"id": "C", "text": "SCTP"},
        {"id": "D", "text": "SPX"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "TCP et UDP",
      "explanation": "UDP n'établit pas de poignée de main (handshake) préalable avant l'envoi des données, contrairement à TCP."
    },
    {
      "id": "NET065",
      "title": "Quel est l'effet de la commande 'ipconfig /flushdns' sous Windows ?",
      "options": [
        {"id": "A", "text": "De redémarrer la carte réseau physique"},
        {"id": "B", "text": "De vider le cache de résolution DNS local de la machine"},
        {"id": "C", "text": "De supprimer l'adresse IP attribuée par le bail DHCP"},
        {"id": "D", "text": "De tester la connectivité avec la passerelle"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Diagnostic réseau",
      "explanation": "La purge du cache DNS permet de forcer l'ordinateur à interroger de nouveau les serveurs DNS en cas de modification d'enregistrement."
    },
    {
      "id": "NET066",
      "title": "Quel type d'adresse IPv6 est destiné à un groupe d'interfaces spécifiques, le paquet étant livré à la plus proche d'entre elles ?",
      "options": [
        {"id": "A", "text": "Unicast"},
        {"id": "B", "text": "Multicast"},
        {"id": "C", "text": "Anycast"},
        {"id": "D", "text": "Broadcast"}
      ],
      "correctAnswerId": "C",
      "level": "moyen",
      "category": "IPv6",
      "explanation": "L'adressage Anycast en IPv6 permet d'acheminer un flux vers le nœud le plus proche topologiquement parmi un groupe partageant la même adresse."
    },
    {
      "id": "NET067",
      "title": "Quel protocole de messagerie utilise par défaut les ports TCP 110 (non sécurisé) ou 995 (sécurisé par SSL/TLS) ?",
      "options": [
        {"id": "A", "text": "SMTP"},
        {"id": "B", "text": "IMAP"},
        {"id": "C", "text": "POP3"},
        {"id": "D", "text": "FTP"}
      ],
      "correctAnswerId": "C",
      "level": "moyen",
      "category": "Protocoles de messagerie",
      "explanation": "POP3 (Post Office Protocol version 3) utilise historiquement le port 110 et le port 995 pour sa variante chiffrée POP3S."
    },
    {
      "id": "NET068",
      "title": "Qu'est-ce que le 'Pointeur inversé' ou enregistrement PTR dans le DNS ?",
      "options": [
        {"id": "A", "text": "Il associe un nom de domaine à une adresse IP"},
        {"id": "B", "text": "Il permet la résolution inverse, c'est-à-dire de lier une adresse IP à un nom de domaine"},
        {"id": "C", "text": "Il sert à certifier l'expéditeur d'un e-mail"},
        {"id": "D", "text": "Il configure le routage statique"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "DNS",
      "explanation": "Les enregistrements PTR (utilisés dans la zone in-addr.arpa) permettent de retrouver le nom d'hôte à partir de son IP (reverse DNS)."
    },
    {
      "id": "NET069",
      "title": "Quel protocole réseau permet de configurer dynamiquement les routeurs et de propager des informations de routage au sein d'un même système autonome (IGP) comme OSPF ?",
      "options": [
        {"id": "A", "text": "BGP"},
        {"id": "B", "text": "OSPF"},
        {"id": "C", "text": "DNS"},
        {"id": "D", "text": "ARP"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Routage",
      "explanation": "OSPF (Open Shortest Path First) est un protocole de routage à état de liens utilisé à l'intérieur d'un système autonome."
    },
    {
      "id": "NET070",
      "title": "Quel est le principal avantage de l'utilisation du protocole DHCP par rapport à un adressage IP statique dans un grand parc informatique ?",
      "options": [
        {"id": "A", "text": "Il garantit un chiffrement militaire du trafic local"},
        {"id": "B", "text": "Il automatise la distribution et la gestion centralisée des baux d'adresses IP, évitant les conflits"},
        {"id": "C", "text": "Il supprime totalement le besoin d'utiliser des routeurs"},
        {"id": "D", "text": "Il élimine les besoins de maintenance des câbles"}
      ],
      "correctAnswerId": "B",
      "level": "moyen",
      "category": "Protocoles réseau",
      "explanation": "Le DHCP simplifie grandement l'administration réseau en évitant la configuration manuelle et les risques de doublons d'adresses."
    },
    {
      "id": "NET021",
      "title": "Quelle est l'adresse de diffusion du sous-réseau 192.168.10.64/26 ?",
      "options": [
        {"id": "A", "text": "192.168.10.63"},
        {"id": "B", "text": "192.168.10.127"},
        {"id": "C", "text": "192.168.10.128"},
        {"id": "D", "text": "192.168.10.255"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Un /26 contient 64 adresses. Le bloc qui commence à .64 se termine à .127, qui est l'adresse de diffusion."
    },
    {
      "id": "NET022",
      "title": "Combien d'adresses IPv4 au total contient un sous-réseau /28 ?",
      "options": [
        {"id": "A", "text": "8"},
        {"id": "B", "text": "14"},
        {"id": "C", "text": "16"},
        {"id": "D", "text": "32"}
      ],
      "correctAnswerId": "C",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Un /28 laisse 4 bits pour les adresses, soit 2^4 = 16 adresses au total, dont généralement 14 utilisables par des hôtes."
    },
    {
      "id": "NET023",
      "title": "Quel protocole de routage échange des routes entre systèmes autonomes sur Internet ?",
      "options": [
        {"id": "A", "text": "RIP"},
        {"id": "B", "text": "OSPF"},
        {"id": "C", "text": "BGP"},
        {"id": "D", "text": "STP"}
      ],
      "correctAnswerId": "C",
      "level": "difficile",
      "category": "Routage",
      "explanation": "BGP est le protocole de routage inter-domaines utilisé pour échanger des informations entre systèmes autonomes."
    },
    {
      "id": "NET024",
      "title": "Quel mécanisme permet à plusieurs appareils privés de partager une adresse IPv4 publique en distinguant leurs connexions par des ports ?",
      "options": [
        {"id": "A", "text": "DNSSEC"},
        {"id": "B", "text": "PAT"},
        {"id": "C", "text": "STP"},
        {"id": "D", "text": "ARP"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "NAT et IPv4",
      "explanation": "PAT traduit les adresses et les ports afin de distinguer plusieurs connexions qui partagent une même adresse IPv4 publique."
    },
    {
      "id": "NET025",
      "title": "Quelle est l'adresse réseau de 10.20.30.200/27 ?",
      "options": [
        {"id": "A", "text": "10.20.30.160"},
        {"id": "B", "text": "10.20.30.192"},
        {"id": "C", "text": "10.20.30.200"},
        {"id": "D", "text": "10.20.30.224"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Un /27 utilise des blocs de 32 adresses dans le dernier octet. L'adresse 200 appartient au bloc 192 à 223."
    },
    {
      "id": "NET026",
      "title": "Quel est le rôle principal de STP dans un réseau Ethernet commuté ?",
      "options": [
        {"id": "A", "text": "Chiffrer les trames Ethernet"},
        {"id": "B", "text": "Empêcher les boucles de couche 2 en bloquant certains chemins redondants"},
        {"id": "C", "text": "Attribuer des adresses IP publiques"},
        {"id": "D", "text": "Résoudre les noms DNS"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Commutation",
      "explanation": "STP construit une topologie sans boucle logique en empêchant certains ports redondants de transmettre des trames."
    },
    {
      "id": "NET027",
      "title": "Dans IPv6, quel mécanisme remplit notamment une fonction comparable à ARP pour la découverte des voisins ?",
      "options": [
        {"id": "A", "text": "Neighbor Discovery Protocol (NDP)"},
        {"id": "B", "text": "FTP"},
        {"id": "C", "text": "BGP"},
        {"id": "D", "text": "NTP"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "IPv6",
      "explanation": "NDP utilise ICMPv6 pour découvrir les voisins et leurs adresses de couche liaison sur le lien local."
    },
    {
      "id": "NET028",
      "title": "Quel préfixe IPv6 est réservé aux adresses link-local ?",
      "options": [
        {"id": "A", "text": "2000::/3"},
        {"id": "B", "text": "FC00::/7"},
        {"id": "C", "text": "FE80::/10"},
        {"id": "D", "text": "::1/128"}
      ],
      "correctAnswerId": "C",
      "level": "difficile",
      "category": "IPv6",
      "explanation": "Les adresses IPv6 link-local appartiennent au préfixe FE80::/10 et sont utilisées sur le lien local."
    },
    {
      "id": "NET029",
      "title": "Quel protocole permet de superviser et de collecter des informations depuis des équipements réseau ?",
      "options": [
        {"id": "A", "text": "SNMP"},
        {"id": "B", "text": "SMTP"},
        {"id": "C", "text": "SFTP"},
        {"id": "D", "text": "SIP"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "Supervision réseau",
      "explanation": "SNMP permet à un système de supervision d'interroger les agents des équipements et de recevoir certaines notifications."
    },
    {
      "id": "NET030",
      "title": "Un routeur possède les routes 10.1.0.0/16 et 10.1.2.0/24. Quelle route choisit-il normalement pour 10.1.2.50 ?",
      "options": [
        {"id": "A", "text": "10.1.0.0/16, car son préfixe est plus court"},
        {"id": "B", "text": "10.1.2.0/24, car la route est plus spécifique"},
        {"id": "C", "text": "Les deux routes simultanément dans tous les cas"},
        {"id": "D", "text": "Aucune route, car les préfixes se chevauchent"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage IP",
      "explanation": "Le routage IP applique généralement la règle du plus long préfixe correspondant. Le /24 est plus spécifique que le /16."
    },
    {
      "id": "NET071",
      "title": "Quel est le résultat de l'application du masque de sous-réseau 255.255.255.192 à une adresse IP ?",
      "options": [
        {"id": "A", "text": "Un préfixe de /24"},
        {"id": "B", "text": "Un préfixe de /25"},
        {"id": "C", "text": "Un préfixe de /26"},
        {"id": "D", "text": "Un préfixe de /28"}
      ],
      "correctAnswerId": "C",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Le dernier octet vaut 192 (en binaire 11000000), ce qui ajoute 2 bits de réseau aux 24 bits précédents, soit un préfixe global /26."
    },
    {
      "id": "NET072",
      "title": "Dans le protocole OSPF, quel est le nom du routeur élu sur un réseau à accès multiple pour centraliser les échanges d'états de liens et réduire le trafic ?",
      "options": [
        {"id": "A", "text": "DR (Designated Router)"},
        {"id": "B", "text": "ASBR"},
        {"id": "C", "text": "ABR"},
        {"id": "D", "text": "Gateway of Last Resort"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "Routage",
      "explanation": "Le DR (Routeur Désigné) et le BDR simplifient la diffusion des Link State Advertisements (LSA) sur les réseaux partagés comme Ethernet."
    },
    {
      "id": "NET073",
      "title": "Quel protocole de redondance de passerelle par défaut (First Hop Redundancy Protocol) est un standard ouvert (IETF RFC 5798) ?",
      "options": [
        {"id": "A", "text": "HSRP (Cisco proprietary)"},
        {"id": "B", "text": "VRRP (Virtual Router Redundancy Protocol)"},
        {"id": "C", "text": "GLBP"},
        {"id": "D", "text": "STP"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage et Haute Disponibilité",
      "explanation": "VRRP est le standard ouvert inter-constructeurs permettant de virtualiser une passerelle par défaut pour assurer la haute disponibilité."
    },
    {
      "id": "NET074",
      "title": "Quel est le rôle du champ 'EtherType' (ou longueur) dans l'en-tête d'une trame Ethernet II ?",
      "options": [
        {"id": "A", "text": "D'indiquer l'adresse MAC du destinataire"},
        {"id": "B", "text": "D'identifier le protocole de couche supérieure (ex: IPv4, IPv6, ARP) encapsulé dans la trame"},
        {"id": "C", "text": "De mesurer le temps de latence en nanosecondes"},
        {"id": "D", "text": "De chiffrer la charge utile"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Commutation",
      "explanation": "L'EtherType (sur 16 bits) indique au récepteur quel protocole de niveau 3 doit traiter les données contenues dans la trame."
    },
    {
      "id": "NET075",
      "title": "Combien de bits d'hôtes utilisables reste-t-il dans un sous-réseau IPv4 doté du masque 255.255.255.240 ?",
      "options": [
        {"id": "A", "text": "2 bits (4 adresses au total)"},
        {"id": "B", "text": "4 bits (16 adresses au total)"},
        {"id": "C", "text": "5 bits (32 adresses au total)"},
        {"id": "D", "text": "6 bits (64 adresses au total)"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Le masque se termine par 240 (11110000 en binaire), ce qui laisse 4 bits pour les hôtes ($32 - 28 = 4$). Le sous-réseau est un /28."
    },
    {
      "id": "NET076",
      "title": "Quel protocole de la couche liaison normalisé par l'IEEE (802.1Q) permet d'insérer des balises (tags) pour transporter plusieurs VLANs sur un même lien physique (trunk) ?",
      "options": [
        {"id": "A", "text": "ISL"},
        {"id": "B", "text": "802.1Q"},
        {"id": "C", "text": "802.11ac"},
        {"id": "D", "text": "STP"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Commutation et VLAN",
      "explanation": "La norme IEEE 802.1Q est le standard universel d'étiquetage (tagging) des trames pour les liaisons inter-switches (Trunk)."
    },
    {
      "id": "NET077",
      "title": "Quel algorithme de calcul de chemin le plus court est utilisé par le protocole de routage OSPF pour construire sa table de routage ?",
      "options": [
        {"id": "A", "text": "L'algorithme de Bellman-Ford"},
        {"id": "B", "text": "L'algorithme de Dijkstra (SPF)"},
        {"id": "C", "text": "L'algorithme de spanning tree"},
        {"id": "D", "text": "L'algorithme RSA"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage",
      "explanation": "OSPF s'appuie sur l'algorithme de Dijkstra pour calculer l'arbre des plus courts chemins vers chaque sous-réseau de la zone."
    },
    {
      "id": "NET078",
      "title": "Dans le modèle BGP, qu'est-ce qu'un 'Système Autonome' (Autonomous System - AS) ?",
      "options": [
        {"id": "A", "text": "Un ordinateur portable configuré en DHCP"},
        {"id": "B", "text": "Un ensemble de réseaux IP et de routeurs sous une administration unique appliquant une politique de routage cohérente"},
        {"id": "C", "text": "Un serveur DNS racine mondial"},
        {"id": "D", "text": "Un sous-réseau protégé par un VPN IPsec"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage",
      "explanation": "Un AS est identifié par un numéro unique (ASN) et géré par une entité (FAI, grande entreprise) qui contrôle ses propres règles d'acheminement externe."
    },
    {
      "id": "NET079",
      "title": "Quel protocole de chiffrement de niveau 3 (couche réseau) sécurise et authentifie les paquets IP pour créer des VPN robustes ?",
      "options": [
        {"id": "A", "text": "TLS"},
        {"id": "B", "text": "IPsec (Internet Protocol Security)"},
        {"id": "C", "text": "HTTPS"},
        {"id": "D", "text": "SSH"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Sécurité réseau",
      "explanation": "IPsec opère directement au niveau de la couche réseau via ses protocoles AH et ESP pour chiffrer et intégrité les flux IP."
    },
    {
      "id": "NET080",
      "title": "Quel champ du protocole TCP gère la phase de négociation en trois étapes (three-way handshake) en indiquant un numéro d'ordre initial ?",
      "options": [
        {"id": "A", "text": "Le drapeau ACK avec la fenêtre de contrôle"},
        {"id": "B", "text": "Le numéro de séquence (Sequence Number) associé au drapeau SYN"},
        {"id": "C", "text": "Le champ Checksum de l'en-tête"},
        {"id": "D", "text": "Le champ Urgent Pointer"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "TCP et UDP",
      "explanation": "Lors du handshake TCP, l'échange de numéros de séquence synchronise les deux correspondants avant le transfert effectif des données."
    },
    {
      "id": "NET081",
      "title": "Quelle est l'adresse de diffusion (broadcast) du sous-réseau 172.16.32.0/20 ?",
      "options": [
        {"id": "A", "text": "172.16.32.255"},
        {"id": "B", "text": "172.16.47.255"},
        {"id": "C", "text": "172.16.63.255"},
        {"id": "D", "text": "172.16.255.255"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Subnetting",
      "explanation": "Un /20 s'étend sur 16 blocs dans le troisième octet (32 à 47). Le bloc 32 se termine donc à .47.255."
    },
    {
      "id": "NET082",
      "title": "Quel mécanisme de sécurité sur les commutateurs Cisco (Switch Security) permet de contrer les attaques d'usurpation d'adresses MAC en filtrant les ports ?",
      "options": [
        {"id": "A", "text": "Port Security"},
        {"id": "B", "text": "Spanning Tree Protocol"},
        {"id": "C", "text": "NAT overload"},
        {"id": "D", "text": "DNSSEC"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "Sécurité réseau",
      "explanation": "Port Security limite le nombre d'adresses MAC autorisées à apprendre sur un port physique spécifique, bloquant l'accès en cas d'intrusion."
    },
    {
      "id": "NET083",
      "title": "Quel protocole de routage à vecteur de distance utilise le nombre de sauts (limité à 15) comme métrique unique ?",
      "options": [
        {"id": "A", "text": "OSPF"},
        {"id": "B", "text": "RIP (Routing Information Protocol)"},
        {"id": "C", "text": "BGP"},
        {"id": "D", "text": "IS-IS"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage",
      "explanation": "RIP est un protocole historique de type Bellman-Ford où la métrique est le saut, avec une limite stricte de 15 sauts maximum."
    },
    {
      "id": "NET084",
      "title": "Dans le cadre de l'autoconfiguration d'adresse sans état IPv6 (SLAAC), quel protocole ICMPv6 les nœuds utilisent-ils pour découvrir les routeurs locaux ?",
      "options": [
        {"id": "A", "text": "Router Solicitation (RS) et Router Advertisement (RA)"},
        {"id": "B", "text": "ARP Request et ARP Reply"},
        {"id": "C", "text": "DHCPv4 Discover"},
        {"id": "D", "text": "Echo Request/Reply"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "IPv6",
      "explanation": "SLAAC s'appuie sur les messages RS et RA d'ICMPv6 pour permettre aux hôtes de générer automatiquement leur propre adresse IPv6 globale."
    },
    {
      "id": "NET085",
      "title": "Qu'est-ce qu'une attaque par déni de service distribué (DDoS) à amplification DNS (DNS Amplification) ?",
      "options": [
        {"id": "A", "text": "Une surcharge des câbles sous-marins par des pings continus"},
        {"id": "B", "text": "L'utilisation de serveurs DNS ouverts pour renvoyer des réponses massives vers une IP usurpée en exploitant des requêtes ANY"},
        {"id": "C", "text": "Le vol des clés privées du certificat SSL d'un site web"},
        {"id": "D", "text": "La modification des tables de routage BGP d'un FAI"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Sécurité réseau",
      "explanation": "Cette attaque par réflexion exploite la dissymétrie de taille entre une petite requête DNS et une très grande réponse pour saturer la cible."
    },
    {
      "id": "NET086",
      "title": "Quel protocole de sécurité de couche liaison sans fil (Wi-Fi) a succédé au WPA2 en introduisant le chiffrement SAE (Simultaneous Authentication of Equals) ?",
      "options": [
        {"id": "A", "text": "WEP"},
        {"id": "B", "text": "WPA3"},
        {"id": "C", "text": "WPS"},
        {"id": "D", "text": "RADIUS"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Sécurité réseau et Wi-Fi",
      "explanation": "WPA3 renforce significativement la sécurité des réseaux sans fil personnels grâce à l'échange de clés SAE protégeant contre les attaques par dictionnaire."
    },
    {
      "id": "NET087",
      "title": "Qu'est-ce que l'inspection dynamique des paquets ARP (DAI - Dynamic ARP Inspection) sur un commutateur géré ?",
      "options": [
        {"id": "A", "text": "Un outil de chiffrement des trames Ethernet"},
        {"id": "B", "text": "Une fonction de sécurité qui utilise la table DHCP Snooping pour intercepter et rejeter les fausses correspondances ARP"},
        {"id": "C", "text": "Un système de conversion automatique IPv4 vers IPv6"},
        {"id": "D", "text": "Un algorithme de compression des en-têtes IP"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Sécurité réseau",
      "explanation": "La DAI protège activement le réseau contre les attaques d'ARP Spoofing en comparant les paquets ARP aux liaisons légitimes enregistrées."
    },
    {
      "id": "NET088",
      "title": "Dans le routage IP, quel est le comportement d'un routeur lorsqu'il reçoit un paquet dont aucune route spécifique ni passerelle par défaut ne correspond dans sa table ?",
      "options": [
        {"id": "A", "text": "Il renvoie le paquet à l'adresse source par broadcast"},
        {"id": "B", "text": "Il supprime (drop) le paquet et renvoie éventuellement un message ICMP 'Destination Unreachable'"},
        {"id": "C", "text": "Il stocke indéfiniment le paquet en mémoire tampon"},
        {"id": "D", "text": "Il le transforme en trame de couche 2"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Routage IP",
      "explanation": "En l'absence de route correspondante (ou de route par défaut 0.0.0.0/0), le paquet est abandonné et une notification ICMP est émise."
    },
    {
      "id": "NET089",
      "title": "Quel protocole de tunneling de couche 2 (Layer 2 Tunneling Protocol) est souvent combiné avec IPsec pour offrir des connexions VPN sécurisées aux utilisateurs nomades ?",
      "options": [
        {"id": "A", "text": "L2TP"},
        {"id": "B", "text": "PPP simple"},
        {"id": "C", "text": "ICMP"},
        {"id": "D", "text": "SNMP"}
      ],
      "correctAnswerId": "A",
      "level": "difficile",
      "category": "Réseaux virtuels et VPN",
      "explanation": "L2TP ne chiffre pas nativement les données ; il est donc couplé à IPsec (L2TP/IPsec) pour garantir la confidentialité et l'authentification."
    },
    {
      "id": "NET090",
      "title": "Quel problème critique de performance le protocole STP (Spanning Tree Protocol) original met-il du temps à résoudre lors d'un changement de topologie (convergence lente) ?",
      "options": [
        {"id": "A", "text": "La saturation du cache DNS"},
        {"id": "B", "text": "Les tempêtes de diffusion de trames (broadcast storms) et les boucles de duplication de couches 2"},
        {"id": "C", "text": "L'expiration des baux DHCP"},
        {"id": "D", "text": "La fragmentation excessive des paquets IP"}
      ],
      "correctAnswerId": "B",
      "level": "difficile",
      "category": "Commutation",
      "explanation": "Sans STP ou ses évolutions rapides (RSTP), les boucles physiques en couche 2 provoquent une multiplication exponentielle des trames menant à la panne totale du réseau."
    }
  ]