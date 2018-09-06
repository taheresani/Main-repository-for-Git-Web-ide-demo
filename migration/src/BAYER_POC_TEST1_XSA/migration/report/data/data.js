var main_data = {
    "sum": [
        {
            "name": "total",
            "number": 31
        },
        {
            "name": "db",
            "number": 31,
            "detail": {
                ".analyticview": 2,
                ".analyticprivilege": 2,
                ".attributeview": 6,
                ".calculationview": 20,
                ".hdbtablefunction": 1
            }
        }
    ],
    "errors": {
        "number": 0,
        "list": []
    },
    "warnings": {
        "number": 1,
        "list": [
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            }
        ]
    },
    "infos": {
        "number": 0,
        "list": []
    },
    "steps": [
        {
            "priority": 4,
            "always-shown": true,
            "name": "Migration of Security Concept Required",
            "desc": "The security concept has changed with XS Advanced and is incompatible with XS Classic. Manual migration steps are required in order to complete the migration of this application to XS Advanced. <br>For information about the XS Advanced security concept read the XS Advanced Migration Guide.",
            "link": {
                "info": "description",
                "url": "undefined#security"
            },
            "messages": {
                "WARNING": [
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    }
                ]
            },
            "list": [
                {
                    "text": "WARNING",
                    "value": 1
                }
            ]
        }
    ],
    "task": {
        "dus": [
            {
                "name": "BAYER_DU_MIGRATION",
                "vendor": "SAP.TRAINING",
                "version": "0.0.0"
            }
        ],
        "packages": [
            "BAYER_POC_TEST1"
        ]
    },
    "project": {
        "name": "BAYER_POC_TEST1_XSA",
        "vendor": "SAP.TRAINING",
        "version": "0.0.0",
        "description": "bayerpoctest1xsa"
    },
    "cmdline": "--h \"false\" --help \"false\" --generate-manifests \"false\" --zip \"true\" --hta \"false\" --generate-providers \"true\" --unhide-hidden-columns \"false\" --generate-local-slash-synonyms \"false\" --integrated-synonymtargets \"false\" --name \"BAYER_POC_TEST1_XSA\" --description \"bayerpoctest1xsa\" --target-dir \"D:\\XSAmigration\\project5\"",
    "isoTime": "2018-08-27T06:27:00.619Z",
    "mig-tool-version": "1.0.11",
    "system": {
        "host": "10.74.162.72",
        "port": "30015",
        "user": "Train_01",
        "sid": "HAN",
        "hana_version": "1.00.102.06.1461042750"
    }
};