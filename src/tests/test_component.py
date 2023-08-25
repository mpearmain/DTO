import unittest
from component import SubComponent, Component


class TestSubComponent(unittest.TestCase):

    def test_load_instance(self):
        """Test loading an instance from JSON data."""
        schema = {
            "properties": {
                "Type": {
                    "type": "string",
                    "enum": ["Specification", "Implementation", "Infrastructure"]
                },
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    }
                }
            }
        }
        subcomponent = SubComponent(schema=schema)
        json_data = {
            "Type": "Specification",
            "specification": {
                "name": "SampleComponent",
                "version": "1.0"
            }
        }
        subcomponent.load_instance(json_data)
        self.assertEqual(subcomponent.get_attribute('Type'), "Specification")

    def test_set_attribute(self):
        """Test setting an attribute in the loaded instance."""
        schema = {
            "properties": {
                "Type": {
                    "type": "string",
                    "enum": ["Specification", "Implementation", "Infrastructure"]
                },
                "specification": {
                    "properties": {
                        "name": {"type": "string"},
                        "version": {"type": "string"}
                    }
                }
            }
        }
        subcomponent = SubComponent(schema=schema)
        json_data = {
            "Type": "Specification",
            "specification": {
                "name": "SampleComponent",
                "version": "1.0"
            }
        }
        subcomponent.load_instance(json_data)
        subcomponent.set_attribute('name', 'UpdatedComponent')
        self.assertEqual(subcomponent.get_attribute('name'), "UpdatedComponent")


class TestComponent(unittest.TestCase):

    def setUp(self):
        self.specification_schema = {
            "properties": {
                "Type": {
                    "type": "string",
                    "enum": ["Specification"]
                },
                "name": {"type": "string"},
                "version": {"type": "string"}
            }
        }
        self.specification = SubComponent(schema=self.specification_schema)
        self.specification.load_instance({"name": "SampleComponent", "version": "1.0"})

    def test_init(self):
        """Test initialization with valid subcomponents."""
        component = Component(specification=self.specification)
        self.assertIsNotNone(component)
        self.assertEqual(component.specification, self.specification)

    def test_configure(self):
        """Test the configure method to get the combined configuration."""
        component = Component(specification=self.specification)
        configuration = component.configure()
        self.assertEqual(configuration['specification']['name'], "SampleComponent")


if __name__ == '__main__':
    unittest.main()
