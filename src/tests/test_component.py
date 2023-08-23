import unittest
from src.DTOComponent import SubComponent, Component


class TestSubComponent(unittest.TestCase):

    def test_init(self):
        """Test initialization with valid schema and type."""
        schema = {
            "properties": {
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    }
                }
            }
        }
        subcomponent = SubComponent(schema=schema, type="Specification")
        self.assertIsNotNone(subcomponent)
        self.assertEqual(subcomponent.type, "Specification")

    def test_invalid_type(self):
        """Test initialization with invalid type."""
        schema = {"properties": {}}
        with self.assertRaises(ValueError):
            SubComponent(schema=schema, type="InvalidType")

    def test_add_attr(self):
        """Test adding an attribute to the metadata."""
        schema = {
            "properties": {
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    }
                }
            }
        }
        subcomponent = SubComponent(schema=schema, type="Specification")
        subcomponent.add_attr("name", "SampleComponent")
        self.assertEqual(subcomponent.metadata["name"], "SampleComponent")

    def test_remove_attr(self):
        """Test removing an attribute from the metadata."""
        schema = {
            "properties": {
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    }
                }
            }
        }
        subcomponent = SubComponent(schema=schema, type="Specification")
        subcomponent.add_attr("name", "SampleComponent")
        subcomponent.remove_attr("name")
        self.assertIsNone(subcomponent.metadata.get("name"))

    def test_validate(self):
        """Test validation of metadata against the schema."""
        schema = {
            "properties": {
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    },
                    "required": ["name"]
                }
            }
        }
        subcomponent = SubComponent(schema=schema, type="Specification")
        subcomponent.add_attr("name", "SampleComponent")
        subcomponent.validate(subcomponent.metadata)  # Should not raise an exception

    def test_validate_failure(self):
        """Test validation failure when metadata does not conform to the schema."""
        schema = {
            "properties": {
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    },
                    "required": ["name"]
                }
            }
        }
        subcomponent = SubComponent(schema=schema, type="Specification")
        with self.assertRaises(Exception):  # Should raise an exception due to missing required field
            subcomponent.validate({})

    def test_load_schema_invalid(self):
        """Test loading an invalid schema."""
        with self.assertRaises(ValueError):
            SubComponent(schema="invalid_schema", type="Specification")

    class TestComponent(unittest.TestCase):

        def setUp(self):
            self.specification_schema = {
                "properties": {
                    "specification": {
                        "properties": {
                            "name": {"type": "string"},
                            "version": {"type": "string"}
                        }
                    }
                }
            }
            self.specification = SubComponent(schema=self.specification_schema, type="Specification")
            self.specification.add_attr("name", "SampleComponent")

        def test_init(self):
            """Test initialization with valid subcomponents."""
            component = Component(specification=self.specification)
            self.assertIsNotNone(component)
            self.assertEqual(component.specification, self.specification)

        def test_init_invalid_subcomponent(self):
            """Test initialization with an invalid subcomponent."""
            with self.assertRaises(ValueError):
                Component(specification="InvalidSubComponent")

        def test_configure(self):
            """Test the configure method to get the combined configuration."""
            component = Component(specification=self.specification)
            configuration = component.configure()
            self.assertEqual(configuration['specification']['name'], "SampleComponent")

        def test_configure_with_implementation_and_infrastructure(self):
            """Test the configure method with implementation and infrastructure."""
            implementation_schema = {
                "properties": {
                    "implementation": {
                        "properties": {
                            "engine": {"type": "string"}
                        }
                    }
                }
            }
            implementation = SubComponent(schema=implementation_schema, type="Implementation")
            implementation.add_attr("engine", "Spark")

            infrastructure_schema = {
                "properties": {
                    "infrastructure": {
                        "properties": {
                            "compute": {"type": "string"}
                        }
                    }
                }
            }
            infrastructure = SubComponent(schema=infrastructure_schema, type="Infrastructure")
            infrastructure.add_attr("compute", "shared")

            component = Component(specification=self.specification, implementation=implementation,
                                  infrastructure=infrastructure)
            configuration = component.configure()
            self.assertEqual(configuration['specification']['name'], "SampleComponent")
            self.assertEqual(configuration['implementation']['engine'], "Spark")
            self.assertEqual(configuration['infrastructure']['compute'], "shared")


if __name__ == '__main__':
    unittest.main()
